import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizletCardComponent } from './quizlet-card.component';

@NgModule({
  declarations: [QuizletCardComponent],
  exports: [QuizletCardComponent],
  imports: [CommonModule],
})
export class QuizletCardModule {}
