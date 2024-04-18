import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { createCommentAPI } from '../../services/api';
import { createCommentThreadActionCreator } from '../detailThread/action';

export default function asyncCreateComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const newThread = await createCommentAPI({ threadId, content });
      dispatch(createCommentThreadActionCreator(newThread));
    } catch (error) {
      throw Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}
