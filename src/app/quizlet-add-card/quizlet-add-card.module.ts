import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizletAddCardComponent } from './quizlet-add-card.component';
import { CardsService } from 'src/shared/services/cards.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuizletAddCardComponent
  ],
  exports: [
    QuizletAddCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class QuizletAddCardModule { 

  constructor(public cardsService: CardsService) {
  }

  ngOnInit(): void {
    this.cardsService.initialize();
  }

  // addPurchase(purchase: Purchase): void {
  //   this.cardsService.(purchase);
  // }

  // delPurchase(purchase: Purchase): void {
  //   this.cardsService.delPurchase(purchase);
  // }
}
