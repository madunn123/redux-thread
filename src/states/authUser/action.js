import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { awaiters, setStateToLocalStorage } from '../../utils/helper';
import { loginAPI, registerAPI, seeOwnProfileAPI } from '../../services/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USERS: 'UNSET_AUTH_USERS',
};

function setAuthUserActionCreator(user) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      user,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USERS,
    payload: {
      user: null,
    },
  };
}

async function asyncRegister({ name, email, password }) {
  return async () => {
    try {
      await registerAPI({ name, email, password });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      await awaiters();

      const token = await loginAPI({ email, password });
      setStateToLocalStorage('token', token);

      const user = await seeOwnProfileAPI();

      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      throw Error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    setStateToLocalStorage('token', null);
  };
}

export {
  ActionType, asyncRegister, asyncSetAuthUser, asyncUnsetAuthUser,
};
