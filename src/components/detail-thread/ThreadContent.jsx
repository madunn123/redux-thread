import React from 'react';
import {
  BiDislike, BiLike, BiSolidDislike, BiSolidLike,
} from 'react-icons/bi';
import { CiShare2 } from 'react-icons/ci';

import { postedAt } from '../../utils/helper';

export default function ThreadContent({
  detail, upVoteThread, downVoteThread, neutralizeVoteThread, authUser,
}) {
  const isLikedByUser = detail?.upVotesBy?.includes(authUser?.id);
  const isDislikeByUser = detail?.downVotesBy?.includes(authUser?.id);

  return (
    <>
      <div className="wrapper">
        <span className="p-4 text-lg ring-1 ring-slate-600">
          #
          {detail?.category}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="m-0 text-2xl tracking-wider duration-500 title text-slate-300/95">{detail?.title}</h1>
        <p className="m-0 text-lg tracking-wide text-slate-400/80">{detail?.body}</p>
      </div>

      <div className="flex flex-row items-center gap-4 pb-4 border-b-2 border-slate-400">
        <button
          type="button"
          aria-label="button-like"
          className="flex flex-wrap items-center gap-2 text-2xl duration-500 hover:text-green-500 hover:text-3xl"
          onClick={isLikedByUser ? neutralizeVoteThread : upVoteThread}
        >
          {isLikedByUser
            ? <BiSolidLike className="text-green-500" />
            : <BiLike />}

          <small className="text-sm">
            |
            {' '}
            {detail?.upVotesBy?.length}
          </small>
        </button>

        <button
          type="button"
          aria-label="button-dislike"
          className="flex flex-wrap items-center gap-2 text-2xl duration-500 hover:text-green-500 hover:text-3xl"
          onClick={isDislikeByUser ? neutralizeVoteThread : downVoteThread}
        >
          {isDislikeByUser
            ? <BiSolidDislike className="text-green-500" />
            : <BiDislike />}

          <small className="text-sm">
            |
            {' '}
            {detail?.downVotesBy?.length}
          </small>
        </button>

        <div className="flex flex-row items-center gap-4">
          <button type="button" aria-label="button-like" className="flex flex-wrap items-center gap-2 text-2xl ">
            <CiShare2 />

            <small className="text-sm">
              |
              {' '}
              {detail?.comments?.length}
            </small>
          </button>
        </div>

        <span className="flex flex-row items-center gap-2 text-sm">
          Dibuat oleh
          {' '}
          <img
            src={detail?.owner?.avatar}
            alt="avatar"
            width={25}
            height={25}
          />
          <b>{detail?.owner?.name}</b>
        </span>

        <span className="text-sm">
          {postedAt(detail?.createdAt)}
        </span>
      </div>
    </>
  );
}
