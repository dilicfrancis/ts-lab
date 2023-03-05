import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SolvefmComponent } from './solvefm/solvefm.component';
import { CueHighlightDirective } from './cue-highlight.directive';

@NgModule({
  declarations: [AppComponent, SolvefmComponent, CueHighlightDirective],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
