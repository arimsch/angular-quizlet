import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizletListCardsComponent } from './quizlet-list-cards.component';

describe('QuizletListCardsComponent', () => {
  let component: QuizletListCardsComponent;
  let fixture: ComponentFixture<QuizletListCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizletListCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizletListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
