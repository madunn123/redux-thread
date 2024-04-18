import React from 'react';
import ThreadItem from './ThreadItem';

export default function ThreadList({
  threads, upVoteThread, neutralizeVoteThread, downVoteThread,
}) {
  return (
    <section className="flex flex-col gap-8">
      {threads?.map((thread) => (
        <ThreadItem
          {...thread}
          key={thread?.id}
          upVoteThread={() => upVoteThread(thread?.id)}
          neutralizeVoteThread={() => neutralizeVoteThread(thread?.id)}
          downVoteThread={() => downVoteThread(thread?.id)}
        />
      ))}
    </section>
  );
}
