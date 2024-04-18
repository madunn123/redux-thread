import React from 'react';
import {
  BiDislike, BiLike, BiSolidDislike, BiSolidLike,
} from 'react-icons/bi';
import { CiShare2 } from 'react-icons/ci';

import ReactHtmlParser from 'react-html-parser';

import { Link } from 'react-router-dom';
import { postedAt } from '../../utils/helper';

export default function ThreadItem({
  authUser, body, category, createdAt, id, downVotesBy, title, totalComments, upVotesBy, user, upVoteThread, neutralizeVoteThread, downVoteThread,
}) {
  const isLikedByUser = upVotesBy.includes(authUser?.id);
  const isDislikeByUser = downVotesBy.includes(authUser?.id);

  return (
    <div className="group">
      <div className="flex flex-col gap-6 py-4 duration-500 border-b-2 border-slate-700 group-hover:bg-slate-700/10 group-hover:p-6 group-hover:border-green-500">
        <div className="wrapper">
          <span className="p-2 text-sm duration-500 category ring-1 ring-slate-600 group-hover:ring-green-500 group-hover:text-green-500">
            #
            {category}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Link to={`/thread/detail/${id}`}>
            <h6 className="text-xl tracking-wider duration-500 title text-slate-300/95 hover:text-green-500 hover:underline">
              {title}
            </h6>
          </Link>

          <span className="m-0 text-base tracking-wide text-slate-400/80">
            {ReactHtmlParser(body)}
          </span>
        </div>

        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-row items-center gap-4">
            <button
              type="button"
              aria-label="button-like"
              className="flex flex-wrap items-center gap-2 text-2xl duration-500 hover:text-green-500 hover:text-3xl"
              onClick={isLikedByUser ? neutralizeVoteThread : upVoteThread}
            >
              {upVotesBy.includes(authUser?.id)
                ? <BiSolidLike className="text-green-500" />
                : <BiLike />}

              <small className="text-sm">
                |
                {' '}
                {upVotesBy?.length}
              </small>
            </button>
          </div>

          <div className="flex flex-row items-center gap-4">
            <button
              type="button"
              aria-label="button-dislike"
              className="flex flex-wrap items-center gap-2 text-2xl duration-500 hover:text-green-500 hover:text-3xl"
              onClick={isDislikeByUser ? neutralizeVoteThread : downVoteThread}
            >
              {downVotesBy.includes(authUser?.id)
                ? <BiSolidDislike className="text-green-500" />
                : <BiDislike />}

              <small className="text-sm">
                |

                {' '}
                {downVotesBy?.length}
              </small>
            </button>
          </div>

          <div className="flex flex-row items-center gap-4">
            <button type="button" aria-label="button-like" className="flex flex-wrap items-center gap-2 text-2xl ">
              <CiShare2 />

              <small className="text-sm">
                |
                {' '}
                {totalComments}
              </small>
            </button>
          </div>

          <span className="text-sm">
            {postedAt(createdAt)}
            {' '}
            hari lalu
          </span>

          <span className="text-sm">
            Dibuat oleh
            {' '}
            <b>{user?.name}</b>
          </span>
        </div>
      </div>
    </div>
  );
}
