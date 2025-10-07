import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
<app-navigation></app-navigation>
<div class="container my-4 style = margin-buttom: 80px">
  <h1 class ="display-3">{{ title }}</h1>
  <router-outlet></router-outlet>
</div>
<app-footer></app-footer>
  `,
  imports: [FooterComponent, NavigationComponent, RouterOutlet]
})
export class AppComponent {
  title = 'frontend';
}
