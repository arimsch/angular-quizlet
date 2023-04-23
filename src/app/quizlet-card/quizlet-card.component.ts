import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/shared/models/card';

@Component({
  selector: 'app-quizlet-card',
  templateUrl: './quizlet-card.component.html',
  styleUrls: ['./quizlet-card.component.css'],
})
export class QuizletCardComponent {
  @Input()
  card!: Card;

  @Output() changeSide = new EventEmitter<Card>();
  @Output() deleteCard = new EventEmitter<Card>();

  public changeSideCard(): void {
    this.changeSide.emit(this.card);
  }

  public removeCard(): void {
    this.deleteCard.emit(this.card);
  }
}
