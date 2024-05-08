import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  standalone: true,
  template: `
    <button data-cy=decrement (click)="decrement()">-</button>
    <span data-cy="count">Current Count: {{ counter }}</span>
    <button data-cy=increment (click)="increment()">+</button>
  `,
})
export class StepperComponent {
  @Input() counter = 0

  increment() {
    this.counter += 1
  }
  
  decrement() {
    this.counter -= 1
  }
}