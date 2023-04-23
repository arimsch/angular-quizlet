import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizletAddCardComponent } from './quizlet-add-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuizletAddCardComponent],
  exports: [QuizletAddCardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class QuizletAddCardModule {}
