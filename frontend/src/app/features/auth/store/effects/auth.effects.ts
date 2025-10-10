import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActions } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';


@Injectable()
export class AuthEffects {
  actions$ = inject(Actions)
  authService = inject(AuthService);

  login$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap(({data}) =>
        this.authService.login(data).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error }))))
      )
    );
  });
}
