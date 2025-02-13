import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isRefreshing: boolean = false;
  startY: number = 0;
  threshold: number = 300;
  onTouchStart(event: TouchEvent) {
    this.startY = event.touches[0].clientY;
  }
  onTouchEnd(event: TouchEvent) {
    const deltaY = event.changedTouches[0].clientY - this.startY;
    if (deltaY >= this.threshold) {
      this.refresh();
    }
  }
  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      window.location.reload();
      this.isRefreshing = false;
    }, 2000);
  }
}
