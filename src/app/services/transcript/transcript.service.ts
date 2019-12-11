import { Injectable } from '@angular/core';
import { Transcript } from '../../models/transcript';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {

  private transcriptUrl = 'https://static.chorus.ai/api/';

  constructor(private http: HttpClient) { }

  /** GET transcript from the server */
  getTranscript(videoId: string): Observable<any> {
    return this.http.get<any>(this.getTranscriptUrl(videoId)).pipe(
      catchError(this.handleError<Transcript[]>('getTranscripts', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTranscriptUrl(videoId) {
    return this.transcriptUrl + `${videoId}` + `.json`;
  }
}
