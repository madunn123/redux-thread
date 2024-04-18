import { ActionType } from './action';

export default function authReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER: {
      return action.payload.user;
    }
    case ActionType.UNSET_AUTH_USERS: {
      return null;
    }
    default: {
      return authUser;
    }
  }
}
