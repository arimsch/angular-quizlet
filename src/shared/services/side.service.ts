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

    public changeCardSide(param: "front" | "back"): void {
      this._cardOpen!.side = param;
    }

    public setHasOpen(param: boolean): void {
      this._hasOpen = param;
    }

    public setCardOpen(card: Card | null): void {
      if(this._cardOpen) {
        this.changeCardSide("front");
      }
      this._cardOpen = card;
      this.changeCardSide("back");    
    }
}