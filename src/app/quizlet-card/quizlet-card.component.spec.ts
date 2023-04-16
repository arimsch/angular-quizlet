import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizletCardComponent } from './quizlet-card.component';

describe('QuizletCardComponent', () => {
  let component: QuizletCardComponent;
  let fixture: ComponentFixture<QuizletCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizletCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizletCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
