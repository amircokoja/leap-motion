import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
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
    this.input = '';
    this.onSubmit.emit();
  }

  onResetKeyboard(): void {
    this.input = '';
  }
}
