import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { seeDetailThreadAPI } from '../../services/api';
import { awaiters } from '../../utils/helper';

const ActionType = {
  SEE_DETAIL_THREAD: 'SEE_DETAIL_THREAD',
  CREATE_COMMENT_THREAD: 'CREATE_COMMENT_THREAD',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_THREAD_VOTE_DETAIL: 'NEUTRALIZE_THREAD_VOTE',

  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRALIZE_COMMENT_VOTE: 'NETURALIZE_COMMENT_VOTE',
};

function seeDetailThreadActionCreator(thread) {
  return {
    type: ActionType.SEE_DETAIL_THREAD,
    payload: {
      thread,
    },
  };
}

function createCommentThreadActionCreator(newThread) {
  return {
    type: ActionType.CREATE_COMMENT_THREAD,
    payload: {
      newThread,
    },
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralizeThreadDetailVote(userId) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_VOTE_DETAIL,
    payload: {
      userId,
    },
  };
}

function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeCommentVoteActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_COMMENT_VOTE,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncSeeDetailThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      await awaiters();

      const thread = await seeDetailThreadAPI(threadId);
      dispatch(seeDetailThreadActionCreator(thread));
    } catch (error) {
      throw Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  seeDetailThreadActionCreator,
  createCommentThreadActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralizeThreadDetailVote,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralizeCommentVoteActionCreator,
  asyncSeeDetailThread,
};
