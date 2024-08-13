import { Component, Input } from '@angular/core';
import { faMoon, faSun, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule, NgIf } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  faMoon = faMoon;
  faSun = faSun; 
  faSearch = faSearch;

  isBannerVisible = true;
  isDarkTheme: boolean = false;
  themeIcon: string = '';
 
  constructor(public themeService: ThemeService) {}
 
  ngOnInit(): void {
    this.isDarkTheme = this.themeService.getTheme() === 'dark';
    this.setIcon();
    
  }
 
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    const newTheme = this.isDarkTheme ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
    this.setIcon();
  }
 
  setIcon(): void {
    this.themeIcon = this.isDarkTheme
      ? 'https://code.visualstudio.com/assets/icons/theme-light.svg'
      : 'https://code.visualstudio.com/assets/icons/theme-dark.svg';
  }
  


  closeBanner() {
    this.isBannerVisible = false;
  }
}
