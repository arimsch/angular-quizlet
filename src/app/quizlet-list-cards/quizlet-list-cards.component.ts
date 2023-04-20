import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Card } from 'src/shared/models/card';
import { CardsService } from 'src/shared/services/cards.service';
import { SideService } from 'src/shared/services/side.service';

@Component({
  selector: 'app-quizlet-list-cards',
  templateUrl: './quizlet-list-cards.component.html',
  styleUrls: ['./quizlet-list-cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizletListCardsComponent implements OnInit{
  constructor(public cardService: CardsService, public sideService: SideService) {
  }

  ngOnInit(): void {
    this.cardService.initialize();
  }

  public deleteCard(card: Card): void {
    this.cardService.delCard(card);
  }

  public viewBack(card: Card): void {
    this.sideService.setHasOpen(true);
    this.sideService.setCardOpen(card);
  }
}
