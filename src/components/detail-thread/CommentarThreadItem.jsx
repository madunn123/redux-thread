import React from 'react';
import {
  BiDislike, BiLike, BiSolidDislike, BiSolidLike,
} from 'react-icons/bi';
import { postedAt } from '../../utils/helper';

export default function CommentarThreadItem({
  content, createdAt, downVotesBy, owner, upVotesBy, authUser, upVoteComment, neutralizeComment, downVoteComment,
}) {
  const isLike = upVotesBy.includes(authUser?.id);
  const isDislike = downVotesBy.includes(authUser?.id);

  return (
    <div className="border-b border-slate-600">
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <img src={owner?.avatar} alt="avatar" height={30} width={30} />
            <span className="text-base font-semibold capitalize text-slate-300">{owner?.name}</span>
          </div>

          <small className="text-slate-500">{postedAt(createdAt)}</small>
        </div>

        <div className="flex flex-col gap-3">
          <p className="m-0 text-slate-300/85">{content}</p>

          <div className="flex flex-row items-center gap-4">
            <button
              type="button"
              aria-label="button-like"
              className="flex flex-wrap items-center gap-2 text-xl duration-500 hover:text-green-500 hover:text-3xl"
              onClick={isLike ? neutralizeComment : upVoteComment}
            >
              {upVotesBy?.includes(authUser?.id)
                ? <BiSolidLike className="text-green-500" />
                : <BiLike />}

              <small className="text-sm">
                |
                {' '}
                {upVotesBy?.length || 0}
              </small>
            </button>

            <button
              type="button"
              aria-label="button-dislike"
              className="flex flex-wrap items-center gap-2 text-xl duration-500 hover:text-green-500 hover:text-3xl"
              onClick={isDislike ? neutralizeComment : downVoteComment}
            >
              {downVotesBy?.includes(authUser?.id)
                ? <BiSolidDislike className="text-green-500" />
                : <BiDislike />}

              <small className="text-sm">
                |
                {' '}
                {downVotesBy?.length || 0}
              </small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
