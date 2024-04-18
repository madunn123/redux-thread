import {
  Link, Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';

import LoadingBar from 'react-redux-loading-bar';

import { useDispatch, useSelector } from 'react-redux';

import { LuPlus } from 'react-icons/lu';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Threads from '../pages/Threads';
import Leaderboards from '../pages/Leaderboards';
import DetailThread from '../pages/DetailThread';
import TopNavigation from '../components/common/TopNavigation';
import BottomNavigation from '../components/common/BottomNavigation';

import { asyncUnsetAuthUser } from '../states/authUser/action';
import CreateThread from '../pages/CreateThread';

export default function Routers() {
  const authUser = useSelector((states) => states.authUser);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/*');
  };

  return (
    <>
      <LoadingBar />

      <main className="relative flex flex-col h-full gap-10">
        <TopNavigation user={authUser} />
        <BottomNavigation authUser={authUser} logout={onLogout} />

        {pathname === '/' && authUser !== null && (
          <div className="fixed right-16 bottom-[160px]">
            <Link to="/thread/new-thread">
              <div className="p-4 duration-500 border-2 rounded-full border-slate-600 hover:border-green-500 hover:text-green-500 hover:bg-slate-500/50">
                <LuPlus className="text-2xl" />
              </div>
            </Link>
          </div>
        )}

        <Routes>
          {
                authUser === null && (
                <>
                  <Route path="/*" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </>
                )
            }

          <Route path="/" element={<Threads />} />
          <Route path="/thread/detail/:id" element={<DetailThread />} />
          <Route path="/thread/leaderboard" element={<Leaderboards />} />
          <Route path="/thread/new-thread" element={<CreateThread />} />
        </Routes>
      </main>
    </>
  );
}
