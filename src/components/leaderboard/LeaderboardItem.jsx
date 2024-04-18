import React from 'react';

export default function LeaderboardItem({ user, score }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <img
          src={user?.avatar}
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-xl capitalize">{user?.name}</span>
      </div>

      <span className="text-xl">{score}</span>
    </div>
  );
}
