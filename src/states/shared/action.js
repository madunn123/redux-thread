import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { seeAllThreadsAPI, seeAllUsersAPI } from '../../services/api';
import { seeAllThreadsActionType } from '../threads/action';
import { seeAllUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await seeAllUsersAPI();
      const threads = await seeAllThreadsAPI();

      dispatch(seeAllThreadsActionType(threads));
      dispatch(seeAllUsersActionCreator(users));
    } catch (error) {
      throw Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export default asyncPopulateUsersAndLeaderboards;
