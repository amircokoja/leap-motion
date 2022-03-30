import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-keyboard',
  templateUrl: './text-keyboard.component.html',
  styleUrls: ['./text-keyboard.component.scss'],
})
export class TextKeyboardComponent implements OnInit {
  input = '';

  @Output() onInputUpdate = new EventEmitter<string>();
  @Output() onSubmit = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onInput(value: string): void {
    if (value === 'DELETE') {
      this.input = this.input.slice(0, -1);
    } else {
      this.input = this.input + value;
    }

    this.onInputUpdate.emit(this.input);
  }

  handleSubmit(): void {
    this.onSubmit.emit();
  }
}
