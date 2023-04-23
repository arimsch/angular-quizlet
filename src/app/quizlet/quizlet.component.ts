import { Component } from '@angular/core';
import { Card } from 'src/shared/models/card';
import { CardsService } from 'src/shared/services/cards.service';

@Component({
  selector: 'app-quizlet',
  templateUrl: './quizlet.component.html',
  styleUrls: ['./quizlet.component.css'],
})
export class QuizletComponent {
  constructor(private readonly cardService: CardsService) {}

  ngOnInit(): void {
    this.cardService.initialize();
  }

  public addCard(card: Card): void {
    this.cardService.addCard(card);
  }
}
