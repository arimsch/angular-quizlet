import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizletAddCardComponent } from './quizlet-add-card.component';

describe('QuizletAddCardComponent', () => {
  let component: QuizletAddCardComponent;
  let fixture: ComponentFixture<QuizletAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizletAddCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizletAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
