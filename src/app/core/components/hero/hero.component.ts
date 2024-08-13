import { Component } from '@angular/core';
import { faTerminal, faCode, faTasks, faHistory, faPalette, faUniversalAccess, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule, NgFor } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FontAwesomeModule,NgFor,CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  
 
}
