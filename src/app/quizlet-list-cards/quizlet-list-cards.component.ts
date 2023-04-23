import { Component, OnInit } from '@angular/core';
import { Card } from 'src/shared/models/card';
import { CardsService } from 'src/shared/services/cards.service';
import { SideService } from 'src/shared/services/side.service';

@Component({
  selector: 'app-quizlet-list-cards',
  templateUrl: './quizlet-list-cards.component.html',
  styleUrls: ['./quizlet-list-cards.component.css'],
})
export class QuizletListCardsComponent implements OnInit {
  constructor(
    private readonly cardService: CardsService,
    private readonly sideService: SideService
  ) {}

  ngOnInit(): void {
    this.cardService.initialize();
  }

  public get cards(): Card[] {
    return this.cardService.cards;
  }

  public deleteCard(card: Card): void {
    this.cardService.delCard(card);
  }

  public flipCard(card: Card): void {
    this.sideService.flipCard(card);
  }
}
