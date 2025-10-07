import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-footer></app-footer>
  `,
  imports: [FooterComponent]
})
export class AppComponent {
  title = 'frontend';
}
