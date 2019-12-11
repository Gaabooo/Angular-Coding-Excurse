import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatBadgeModule,
  MatListModule,
  MatIconModule
} from '@angular/material';
import { FooterComponent } from './base/footer/footer.component';
import { MainComponent } from './user/main/main.component';
import { DialogComponent } from './user/dialog/dialog.component';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    A11yModule,
    MatBadgeModule,
    MatListModule,
    MatIconModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
