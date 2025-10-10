import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-start-page',
  imports: [],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {
  counter = signal(0);
  
  increment() {
    this.counter.update((c) => ++c);
  }
}
