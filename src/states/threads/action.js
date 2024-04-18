import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { createThreadAPI } from '../../services/api';
import { awaiters } from '../../utils/helper';

const ActionType = {
  SEE_ALL_THREADS: 'SEE_ALL_THREADS',
  CREATE_NEW_THREAD: 'CREATE_NEW_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_THREAD_VOTE: 'NEUTRALIZE_THREAD_VOTE',
};

function seeAllThreadsActionType(threads) {
  return {
    type: ActionType.SEE_ALL_THREADS,
    payload: {
      threads,
    },
  };
}

function createNewThreadActionCreator(newThread) {
  return {
    type: ActionType.CREATE_NEW_THREAD,
    payload: {
      newThread,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeThreadVote({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncCreateNewThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      await awaiters();
      const newThread = await createThreadAPI({ title, body, category });
      dispatch(createNewThreadActionCreator(newThread));
    } catch (error) {
      throw Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType, seeAllThreadsActionType, upVoteThreadActionCreator, downVoteThreadActionCreator, neutralizeThreadVote, asyncCreateNewThread,
};
