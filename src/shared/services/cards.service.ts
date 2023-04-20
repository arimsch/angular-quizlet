import { Inject, Injectable } from '@angular/core';
import { Card } from '../models/card';
import {
  ICardsApiService,
  ICardsApiServiceToken,
} from '../interfaces/i-cards-api-service';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private _cards: Card[] = [];

  constructor(
    @Inject(ICardsApiServiceToken)
    private cardsApiService: ICardsApiService
  ) {}

  public get cards(): Card[] {
    return this._cards;
  }

  public initialize() {
    this.cardsApiService.getAllCards().subscribe((cards) => {
      this._cards = cards;
    });
  }

  public delCard(card: Card): void {
    this.cardsApiService.delete(card.id!).subscribe(() => {
      this.initialize();
    });
  }

  public addCard(card: Card): void {
    this.cardsApiService.add(card).subscribe(() => {
      this.initialize();
    });
  }
}
