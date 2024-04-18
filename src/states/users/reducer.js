import { ActionType } from './action';

export default function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.SEE_ALL_USERS: {
      return action.payload.users;
    }
    default: {
      return users;
    }
  }
}
