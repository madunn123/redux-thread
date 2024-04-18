import {
  downVoteCommentAPI,
  downVoteThreadAPI, neutralizeCommentVoteAPI, neutralizeThreadVoteAPI, upVoteCommentAPI, upVoteThreadAPI,
} from '../../services/api';
import {
  downVoteCommentActionCreator,
  downVoteThreadDetailActionCreator, neutralizeCommentVoteActionCreator, neutralizeThreadDetailVote, upVoteCommentActionCreator, upVoteThreadDetailActionCreator,
} from '../detailThread/action';
import { downVoteThreadActionCreator, neutralizeThreadVote, upVoteThreadActionCreator } from '../threads/action';

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser?.id }));
    dispatch(upVoteThreadDetailActionCreator({ threadId, userId: authUser?.id }));

    try {
      await upVoteThreadAPI(threadId);
    } catch (error) {
      throw Error(error.message);
    }
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser?.id }));
    dispatch(downVoteThreadDetailActionCreator({ threadId, userId: authUser?.id }));

    try {
      await downVoteThreadAPI(threadId);
    } catch (error) {
      throw Error(error.message);
    }
  };
}

function asyncNeutralizeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeThreadVote({ threadId, userId: authUser?.id }));
    dispatch(neutralizeThreadDetailVote({ threadId, userId: authUser?.id }));

    try {
      await neutralizeThreadVoteAPI(threadId);
    } catch (error) {
      throw Error(error.message);
    }
  };
}

function asyncUpVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteCommentActionCreator({ commentId, userId: authUser?.id }));

    try {
      await upVoteCommentAPI({ threadId, commentId });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

function asyncDownVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser?.id }));

    try {
      await downVoteCommentAPI({ threadId, commentId });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

function asyncNeutralizeVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeCommentVoteActionCreator({ commentId, userId: authUser?.id }));

    try {
      await neutralizeCommentVoteAPI({ threadId, commentId });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeThread,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
};
