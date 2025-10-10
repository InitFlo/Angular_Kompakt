import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoggedIn } from '../../features/auth/store/selectors/auth.selectors';
import { AsyncPipe } from '@angular/common';
import { AuthActions } from '../../features/auth/store/actions/auth.actions';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive,
    AsyncPipe
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  store = inject(Store);
  loggedIn$ = this.store.select(selectLoggedIn);

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
