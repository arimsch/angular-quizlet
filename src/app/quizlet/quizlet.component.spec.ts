import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizletComponent } from './quizlet.component';

describe('QuizletComponent', () => {
  let component: QuizletComponent;
  let fixture: ComponentFixture<QuizletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
