import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { User } from '../../model/user';

export const authFeatureKey = 'auth';

export interface State {
  loading: boolean,
  user: null | User,
  error: string | null,
}

export const initialState: State = {
  loading: false,
  user: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state): State => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(AuthActions.loginSuccess, (state, { user }): State => {
    return {
      ...state,
      loading: false,
      user,
    }
  }),
  on(AuthActions.logout, (state): State => {
    return {
      ...state,
      user: null,
    }
  })
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});

