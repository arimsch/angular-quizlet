import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/shared/models/card';

@Component({
  selector: 'app-quizlet-add-card',
  templateUrl: './quizlet-add-card.component.html',
  styleUrls: ['./quizlet-add-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizletAddCardComponent implements OnInit {
  public form!: FormGroup;

  @Output()
  add = new EventEmitter<Card>();

  public buildAddCardForm(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildAddCardForm();
  }

  public submitAddCard(formValue: FormGroup<any>): void {
    this.add.emit({
      ...formValue.value,
      side: 'front',
    });
    this.form.reset();
  }
}
