import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoggedIn } from '../store/selectors/auth.selectors';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {

  const store = inject(Store)
  const router = inject(Router)

  return store.select(selectLoggedIn).pipe(
    tap((loggedIn) => {
      if(!loggedIn)
        router.navigate(['/login'])
    })
  );
};
