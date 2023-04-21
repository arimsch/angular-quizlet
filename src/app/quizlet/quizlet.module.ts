import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizletComponent } from './quizlet.component';
import { QuizletListCardsModule } from '../quizlet-list-cards/quizlet-list-cards.module';
import { QuizletCardModule } from '../quizlet-card/quizlet-card.module';
import { QuizletAddCardModule } from '../quizlet-add-card/quizlet-add-card.module';
import { CardsMockApiServiceService } from 'src/shared/services/cards-mock-api-service.service';
import { ICardsApiServiceToken } from 'src/shared/interfaces/i-cards-api-service';

@NgModule({
  declarations: [QuizletComponent],
  exports: [QuizletComponent],
  imports: [
    CommonModule,
    QuizletListCardsModule,
    QuizletCardModule,
    QuizletAddCardModule,
  ],
  providers: [
    { provide: ICardsApiServiceToken, useClass: CardsMockApiServiceService }
  ],
})
export class QuizletModule {}
