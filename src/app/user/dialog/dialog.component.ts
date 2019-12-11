import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranscriptService } from '../../services/transcript/transcript.service';
import { Transcript } from 'src/app/models/transcript';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  videoUrl: string;
  transcripts: Array<Transcript>;
  combinedTranscripts: any;
  loading: boolean;

  constructor(
    private transcriptService: TranscriptService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.loading = true;
    this.transcripts = [];
    this.getTranscript();
    this.videoUrl = `https://static.chorus.ai/api/` + data.id + `.mp4`;
  }

  getTranscript(): void {
    if (typeof this.data.id !== 'undefined') {
      this.transcriptService.getTranscript(this.data.id)
        .subscribe(transcripts => {
          this.loading = false;
          this.transcripts = transcripts;
          if (this.transcripts.length > 0) {
            this.sortTranscripts();
            this.combineUtterances();
          }
        });
    }
  }

  sortTranscripts(): void {
    this.transcripts.sort((a, b) => a.time - b.time);
  }

  combineUtterances(): void {
    this.combinedTranscripts = this.transcripts.reduce((array, elem) => {
      const last = array[array.length - 1];
      if (!last || last[0].speaker !== elem.speaker) {
        array.push([elem]);
      } else {
        last.push(elem);
      }
      return array;
    }, []);
  }

  close(): void {
    this.dialogRef.close();
  }

}
