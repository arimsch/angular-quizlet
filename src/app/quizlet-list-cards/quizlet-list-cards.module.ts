import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizletListCardsComponent } from './quizlet-list-cards.component';
import { QuizletCardModule } from '../quizlet-card/quizlet-card.module';
import { SideService } from 'src/shared/services/side.service';

@NgModule({
  declarations: [QuizletListCardsComponent],
  exports: [QuizletListCardsComponent],
  imports: [CommonModule, QuizletCardModule],
  providers: [SideService],
})
export class QuizletListCardsModule {}
