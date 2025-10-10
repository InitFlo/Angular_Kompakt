import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginData } from '../../model/login-data';
import { User } from '../../model/user';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login': props<{ data: LoginData }>(),
    'Load Auths Success': props<{ data: User }>(),
    'Load Auths Failure': props<{ error: unknown }>(),
  }
});
