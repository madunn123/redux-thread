import React from 'react';
import CommentarThreadItem from './CommentarThreadItem';

export default function CommentarThreadList({
  comments, upVoteComment, authUser, neutralizeComment, downVoteComment,
}) {
  return (
    <section className="flex flex-col gap-6 list-commentar">
      <h1 className="m-0 text-lg capitalize text-slate-300/85">
        komentar (
        {comments?.length || 0}
        )
      </h1>

      {comments?.map((comment) => (
        <CommentarThreadItem
          {...comment}
          key={comment?.id}
          authUser={authUser}
          upVoteComment={() => upVoteComment(comment?.id)}
          neutralizeComment={() => neutralizeComment(comment?.id)}
          downVoteComment={() => downVoteComment(comment?.id)}
        />
      ))}
    </section>
  );
}
