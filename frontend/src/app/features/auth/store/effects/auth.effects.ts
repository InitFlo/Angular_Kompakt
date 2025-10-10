import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActions } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
  actions$ = inject(Actions)
  authService = inject(AuthService);
  router = inject(Router);

  login$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap(({ data }) =>
        this.authService.login(data).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error }))))
      )
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      tap((action) => {
        console.log(action);
      }),
      ofType(AuthActions.logout),
      map(() => {
        this.router.navigate(["/start"])
      })
    );
  },
  {
    dispatch: false
  }
  );
}
