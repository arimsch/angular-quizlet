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
    private readonly cardsApiService: ICardsApiService
  ) {}

  public get cards(): Card[] {
    return this._cards;
  }

  private updateCardsState() {
    this.cardsApiService.getAllCards().subscribe((cards) => {
      this._cards = cards;
    });
  }

  public initialize() {
    this.updateCardsState();
  }

  public delCard(card: Card): void {
    this.cardsApiService.delete(card.id!).subscribe(() => {
      this.updateCardsState();
    });
  }

  public addCard(card: Card): void {
    this.cardsApiService.add(card).subscribe(() => {
      this.updateCardsState();
    });
  }
}
