import { ActionType } from './action';

function detailThreadReducer(thread = null, action = {}) {
  switch (action.type) {
    case ActionType.SEE_DETAIL_THREAD: {
      return action.payload.thread;
    }
    case ActionType.CREATE_COMMENT_THREAD: {
      return {
        ...thread,
        comments: [...(thread.comments || []), action.payload.newThread],
      };
    }
    case ActionType.UP_VOTE_THREAD_DETAIL: {
      return {
        ...thread,
        upVotesBy: [...new Set([...thread.upVotesBy, action.payload.userId])],
        downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    }
    case ActionType.DOWN_VOTE_THREAD_DETAIL: {
      return {
        ...thread,
        downVotesBy: [...new Set([...thread.downVotesBy, action.payload.userId])],
        upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
      };
    }
    case ActionType.NEUTRALIZE_THREAD_VOTE_DETAIL: {
      return {
        ...thread,
        upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    }

    case ActionType.UP_VOTE_COMMENT: {
      const { commentId, userId } = action.payload;
      return {
        ...thread,
        comments: thread?.comments?.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              upVotesBy: [...new Set([...comment.upVotesBy, userId])],
              downVotesBy: comment.downVotesBy.filter((id) => id !== userId),
            };
          }
          return comment;
        }),
      };
    }
    case ActionType.DOWN_VOTE_COMMENT: {
      return {
        ...thread,
        comments: thread?.comments?.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: [...new Set([...comment.downVotesBy, action.payload.userId])],
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };
    }
    case ActionType.NEUTRALIZE_COMMENT_VOTE: {
      return {
        ...thread,
        comments: thread?.comments?.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };
    }
    default:
      return thread;
  }
}

export default detailThreadReducer;
