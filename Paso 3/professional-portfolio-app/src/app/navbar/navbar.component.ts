import { Component } from '@angular/core';
import { LanguageService } from '../services/languaje.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private languageService: LanguageService) {}

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
