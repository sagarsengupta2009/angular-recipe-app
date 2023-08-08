import * as fromAuthActions from './auth.actions';

export interface State {
  token: string | null;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false,
};

export function authReducer(
  state = initialState,
  action: fromAuthActions.AuthActions
) {
  switch (action.type) {
    case fromAuthActions.SIGNIN:
    case fromAuthActions.SIGNUP:
      return {
        ...state,
        authenticated: true,
      };
    case fromAuthActions.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false,
      };
    default:
      return state;
  }
}
