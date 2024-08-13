import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
isDarkTheme() {
throw new Error('Method not implemented.');
}  private themeKey = 'theme';
 
  constructor() {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('light');
    }
  }
 
  setTheme(theme: string) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem(this.themeKey, theme);
  }
 
  getTheme(): string {
    return localStorage.getItem(this.themeKey) || 'light';
  }
} 
