import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent
  ],
//  templateUrl: './app.component.html',
  template: `
    <main>
      <app-navbar />
      <app-welcome />
      <app-footer />
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'merantis-web';
}
