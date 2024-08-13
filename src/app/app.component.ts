import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FeaturesComponent } from './core/components/features/features.component';
import { ExtensionsComponent } from './core/components/extensions/extensions.component';
import { CopilotComponent } from './core/components/copilot/copilot.component';
import { CustomComponent } from './core/components/custom/custom.component';
import { CtaComponent } from './core/components/cta/cta.component';
import { HeroComponent } from './core/components/hero/hero.component';
import { ThemeService } from './core/services/theme.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ExtensionsComponent,FooterComponent,HeroComponent,CtaComponent,FeaturesComponent,CopilotComponent,CustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

}
