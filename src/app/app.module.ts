import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizletModule } from './quizlet/quizlet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuizletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
