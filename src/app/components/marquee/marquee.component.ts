import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  imports: [],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {
  isPaused: boolean = false;

  togglePause(): void {
    this.isPaused = !this.isPaused;
  }
}
