import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import asyncCreateComment from '../states/comments/action';
import {
  asyncDownVoteComment,
  asyncDownVoteThread, asyncNeutralizeThread, asyncNeutralizeVoteComment, asyncUpVoteComment, asyncUpVoteThread,
} from '../states/votes/action';
import { asyncSeeDetailThread } from '../states/detailThread/action';

import ThreadContent from '../components/detail-thread/ThreadContent';
import FormThread from '../components/detail-thread/FormThread';
import CommentarThreadList from '../components/detail-thread/CommentarThreadList';

export default function DetailThread() {
  const { id } = useParams();
  const authUser = useSelector((states) => states?.authUser);
  const detailThread = useSelector((states) => states?.detailThread);

  const dispatch = useDispatch();

  const onComment = (content) => {
    dispatch(asyncCreateComment({ threadId: id, content }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment({ threadId: id, commentId }));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteComment({ threadId: id, commentId }));
  };

  const onNeutralizeVoteComment = (commentId) => {
    dispatch(asyncNeutralizeVoteComment({ threadId: id, commentId }));
  };

  useEffect(() => {
    dispatch(asyncSeeDetailThread(id));
  }, [dispatch]);

  return (
    <section className="container flex flex-col gap-10 mx-auto pb-36">
      <ThreadContent
        detail={detailThread}
        authUser={authUser}
        upVoteThread={() => dispatch(asyncUpVoteThread(id))}
        neutralizeVoteThread={() => dispatch(asyncNeutralizeThread(id))}
        downVoteThread={() => dispatch(asyncDownVoteThread(id))}
      />

      <div className="flex flex-col gap-3">
        <h1 className="m-0 text-xl font-bold capitalize text-slate-300/85">beri komentar</h1>
        {
          authUser !== null ? (
            <FormThread
              comment={onComment}
            />
          ) : (
            <div className="flex flex-row items-center gap-1 capitalize">
              <Link to="/*" className="font-bold text-green-500">
                login
              </Link>
              untuk memberi komentar
            </div>
          )
        }
      </div>

      <CommentarThreadList
        authUser={authUser}
        comments={detailThread?.comments}
        upVoteComment={onUpVoteComment}
        downVoteComment={onDownVoteComment}
        neutralizeComment={onNeutralizeVoteComment}
      />
    </section>
  );
}
