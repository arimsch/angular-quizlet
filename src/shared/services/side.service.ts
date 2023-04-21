import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class SideService {
    private _hasOpen = false;
    private _cardOpen: Card|null = null;

    public get cardOpen(): Card | null {
      return this._cardOpen;
    }

    private changeCardSide(param: "front" | "back"): void {
      this._cardOpen!.side = param;
    }

    public flipCard(card: Card | null): void {
      this._hasOpen = true;
      if(this._cardOpen) {
        this.changeCardSide("front");
      }
      if (this._cardOpen !== card) {
        this._cardOpen = card;
        this.changeCardSide("back");    
      } else {
        this._cardOpen = null;
        this._hasOpen = false;
      }
    }
}