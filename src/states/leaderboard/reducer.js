import { ActionType } from './action';

function leaderboardReducer(leaderboard = [], action = {}) {
  switch (action.type) {
    case ActionType.SEE_LEADERBOARDS:
      return action.payload.leaderboards;
    default:
      return leaderboard;
  }
}

export default leaderboardReducer;
