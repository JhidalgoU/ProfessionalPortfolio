import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('en-US');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() {}

  setLanguage(language: string) {
    this.currentLanguageSubject.next(language);
  }
}
