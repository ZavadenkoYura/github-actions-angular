import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  counter: WritableSignal<number> = signal(0);

  increment() {
    this.counter.update((pre) => pre + 1);
  }
}
