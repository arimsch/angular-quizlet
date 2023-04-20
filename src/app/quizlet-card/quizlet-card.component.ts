import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/shared/models/card';

@Component({
  selector: 'app-quizlet-card',
  templateUrl: './quizlet-card.component.html',
  styleUrls: ['./quizlet-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizletCardComponent {
  @Input()
  card!: Card;

  @Output() viewFrontSide = new EventEmitter<Card>();
  @Output() viewBackSide = new EventEmitter<Card>();
  @Output() deleteCard = new EventEmitter<Card>();

  public flipCardToBack(): void {
    this.viewBackSide.emit(this.card);
  }

  public flipCardToFront(): void {

  }

  public removeCard(): void {
    this.deleteCard.emit(this.card);
  }
}
