import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  showScrollButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY || document.documentElement.scrollTop;
    this.showScrollButton = yOffset > 100; // El botón se muestra después de 100px de scroll
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
