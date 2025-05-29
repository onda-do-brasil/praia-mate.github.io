import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterLink, NgOptimizedImage, CommonModule],
})
export class AppComponent {
  constructor(public router: Router) {}
  title = 'onda';
  menuOpen = false;

  shouldHideFooter(): boolean {
    return '/contact' === this.router.url;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
