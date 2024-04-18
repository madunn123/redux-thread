import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import asyncPopulateUsersAndLeaderboards from '../states/shared/action';
import ThreadList from '../components/threads/ThreadList';
import { asyncDownVoteThread, asyncNeutralizeThread, asyncUpVoteThread } from '../states/votes/action';

export default function Threads() {
  const authUser = useSelector((states) => states.authUser);
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);

  const [tab, setTab] = useState(null);
  const [isFilter, setIsFilter] = useState(false);

  const dispatch = useDispatch();

  const threadLists = threads?.map((thread) => ({
    ...thread,
    user: users?.find((user) => user?.id === thread?.ownerId),
    authUser,
  }));

  const filterThreadListsForTabs = isFilter ? threadLists?.filter((thread) => thread?.category === tab) : threadLists;

  const handleFilterTab = (selectedTab) => {
    if (isFilter) {
      setTab(null);
      setIsFilter(false);
    } else {
      setTab(selectedTab);
      setIsFilter(true);
    }
  };

  const upVoteThread = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const downVoteThread = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const neutralizeVoteThread = (threadId) => {
    dispatch(asyncNeutralizeThread(threadId));
  };

  useEffect(() => {
    dispatch(asyncPopulateUsersAndLeaderboards());
  }, [dispatch]);

  return (
    <section className="container flex flex-col gap-6 mx-auto pb-36">
      <div className="flex flex-col gap-2">
        <h1 className="text-base uppercase text-slate-500/90">kategori popular</h1>

        <div className="flex flex-row items-center gap-3 tab">
          {threadLists?.map((thread) => (
            <button
              key={thread?.id}
              type="button"
              className={`p-6 py-3 text-base font-semibold capitalize duration-500 ring-1 ring-slate-600 hover:bg-slate-700/20 hover:ring-green-500 hover:text-green-500 ${tab === thread?.category && 'ring-green-500 text-green-500'}`}
              onClick={() => handleFilterTab(thread?.category)}
            >
              #
              {thread?.category}
            </button>
          ))}
        </div>
      </div>

      <h1 className="text-xl font-bold uppercase">diskusi tersedia</h1>

      <ThreadList
        threads={filterThreadListsForTabs}
        upVoteThread={upVoteThread}
        neutralizeVoteThread={neutralizeVoteThread}
        downVoteThread={downVoteThread}
      />
    </section>
  );
}
