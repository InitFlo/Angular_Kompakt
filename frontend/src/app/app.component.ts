import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <h1>{{ title }}</h1>
    <app-footer></app-footer>
  `,
  imports: [FooterComponent, NavigationComponent]
})
export class AppComponent {
  title = 'frontend';
}
