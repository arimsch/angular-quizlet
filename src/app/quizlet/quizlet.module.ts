import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizletComponent } from './quizlet.component';
import { QuizletListCardsModule } from '../quizlet-list-cards/quizlet-list-cards.module';
import { QuizletCardModule } from '../quizlet-card/quizlet-card.module';
import { QuizletAddCardModule } from '../quizlet-add-card/quizlet-add-card.module';



@NgModule({
  declarations: [
    QuizletComponent
  ],
  exports: [
    QuizletComponent,
  ],
  imports: [
    CommonModule,
    QuizletListCardsModule,
    QuizletCardModule,
    QuizletAddCardModule,
  ]
})
export class QuizletModule { }
