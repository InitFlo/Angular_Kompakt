import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent, NavigationComponent, 
    RouterOutlet],
  template: `

<app-navigation></app-navigation>

<div class="container my-4" style="margin-bottom: 80px">
  <router-outlet></router-outlet>
</div>

<app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'frontend';
}
