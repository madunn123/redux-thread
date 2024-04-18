import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.SEE_ALL_THREADS: {
      return action.payload.threads;
    }
    case ActionType.CREATE_NEW_THREAD: {
      return [action.payload.newThread, ...threads];
    }
    case ActionType.UP_VOTE_THREAD: {
      return threads?.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: [...new Set([...thread.upVotesBy, action.payload.userId])],
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return thread;
      });
    }
    case ActionType.DOWN_VOTE_THREAD: {
      return threads?.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: [...new Set([...thread.downVotesBy, action.payload.userId])],
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return thread;
      });
    }
    case ActionType.NEUTRALIZE_THREAD_VOTE: {
      return threads?.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return thread;
      });
    }
    default: {
      return threads;
    }
  }
}

export default threadsReducer;
