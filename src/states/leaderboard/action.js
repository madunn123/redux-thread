import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { seeLeaderboardsAPI } from '../../services/api';

const ActionType = {
  SEE_LEADERBOARDS: 'SEE_LEADERBOARDS',
};

function seeLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.SEE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncSeeLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await seeLeaderboardsAPI();
      dispatch(seeLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      throw Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, seeLeaderboardsActionCreator, asyncSeeLeaderboards };
