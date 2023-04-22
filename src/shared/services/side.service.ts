import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class SideService {
  private _isOpen = false;
  private _openedCard: Card | null = null;

  public get openedCard(): Card | null {
    return this._openedCard;
  }

  private changeCardSide(param: 'front' | 'back'): void {
    this._openedCard!.side = param;
  }

  public flipCard(card: Card | null): void {
    this._isOpen = true;
    if (this._openedCard) {
      this.changeCardSide('front');
    }
    if (this._openedCard !== card) {
      this._openedCard = card;
      this.changeCardSide('back');
    } else {
      this._openedCard = null;
      this._isOpen = false;
    }
  }
}
