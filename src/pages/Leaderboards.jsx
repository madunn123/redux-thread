import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSeeLeaderboards } from '../states/leaderboard/action';
import LeaderboardItem from '../components/leaderboard/LeaderboardItem';

export default function Leaderboards() {
  const leaderboards = useSelector((states) => states.leaderboard);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSeeLeaderboards());
  }, [dispatch]);

  return (
    <section className="container flex flex-col gap-6 mx-auto">
      <h1 className="text-xl font-bold tracking-wider capitalize">klasmen pengguna aktif</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg font-semibold tracking-wide capitalize">pengguna</span>
          <span className="text-lg font-semibold tracking-wide capitalize">skor</span>
        </div>

        {
          leaderboards?.map((leaderboard) => (
            <LeaderboardItem {...leaderboard} key={leaderboard?.user?.id} />
          ))
        }
      </div>
    </section>
  );
}
