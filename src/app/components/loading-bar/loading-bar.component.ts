import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent implements OnInit {
  @Input() steps: number = 1;
  @Input() progress: number = 0;

  classValue = 'asd';

  constructor() {}

  ngOnInit(): void {
    console.log(this.steps);
    console.log(this.progress);

    if (this.steps === 3) {
    }
  }

  generateClass(): void {
    if (this.progress === 0) {
      return;
    }

    if (this.progress === this.steps) {
      this.classValue = 'full';
    }

    if (this.steps === 3) {
      if (this.progress === 1) {
        this.classValue === 'one-third';
      } else if (this.progress === 2) {
        this.classValue === 'two-thirds';
      }
    }
  }
}
