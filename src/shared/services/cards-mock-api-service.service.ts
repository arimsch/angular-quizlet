import { Injectable } from '@angular/core';
import { ICardsApiService } from '../interfaces/i-cards-api-service';
import { Card } from '../models/card';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsMockApiServiceService implements ICardsApiService {
  private cards: Card[] = [
    {
      id: "1",
      title: "red",
      description: "the color at the long wavelength end of the visible spectrum of light, next to orange and opposite violet.",
      side: 'front',
    },
    {
      id: "2",
      title: "fox",
      description: "the ginger animal",
      side: 'front',
    }
  ]

  public getAllCards(): Observable<Card[]> {
    return of(this.cards);
  }

  public add(card: Card): Observable<void> {
    this.cards.push(card);
    return of(void 0);
  }

  public delete(id: string): Observable<void> {
    this.cards = this.cards.filter(card =>card.id !== id);
    return of(void 0);
  }
}
