import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: 'app-root',
  template: `
<app-navigation></app-navigation>
<div class="container my-4 style = margin-buttom: 80px">
  <h1>{{ title }}</h1>
</div>
<app-footer></app-footer>
  `,
  imports: [FooterComponent, NavigationComponent]
})
export class AppComponent {
  title = 'frontend';
}
