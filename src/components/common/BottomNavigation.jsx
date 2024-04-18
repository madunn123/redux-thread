import { PiChatCircleText } from 'react-icons/pi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { AiOutlineLogin } from 'react-icons/ai';

import { Link, useLocation } from 'react-router-dom';

export default function BottomNavigation({ authUser, logout }) {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full border-t-[1px] border-slate-700 h-[110px] bg-slate-900">
      <div className="container py-5 mx-auto">
        <ul className="flex flex-row items-center justify-center gap-20 text-4xl">
          <Link to="/">
            <li className="flex flex-col gap-1 transition-all duration-700 hover:text-green-500 group">
              <PiChatCircleText className={`mx-auto ${pathname === '/' && 'text-green-500'}`} />
              <span className={`text-sm capitalize transition-all duration-700 ease-linear delay-700 group-hover:block group-hover:text-green-500 ${pathname === '/' ? 'block text-green-500' : 'hidden'}`}>threads</span>
            </li>
          </Link>

          <li className="flex flex-col gap-1 transition-all duration-700 hover:text-green-500 group">
            <Link to="/thread/leaderboard">
              <MdOutlineLeaderboard className={`mx-auto ${pathname === '/thread/leaderboard' && 'text-green-500'}`} />
              <span className={`text-sm capitalize transition-all duration-700 ease-linear delay-700 group-hover:block group-hover:text-green-500 ${pathname === '/thread/leaderboard' ? 'block text-green-500' : 'hidden'}`}>leaderboards</span>
            </Link>
          </li>

          {authUser !== null && (
          <li className="flex flex-col gap-1 transition-all duration-700 hover:text-green-500 group">
            <button type="button" onClick={logout}>
              <AiOutlineLogin className={`mx-auto ${pathname === '/*' || pathname === '/register' ? 'text-green-500' : ''}`} />
              <span className={`text-sm capitalize transition-all duration-700 ease-linear delay-700 group-hover:block group-hover:text-green-500 ${pathname === '/*' || pathname === '/register' ? 'block text-green-500' : 'hidden'}`}>logout</span>
            </button>
          </li>
          )}

          {authUser === null && (
          <li className="flex flex-col gap-1 transition-all duration-700 hover:text-green-500 group">
            <Link to="/*">
              <AiOutlineLogin className={`mx-auto ${pathname === '/*' || pathname === '/register' ? 'text-green-500' : ''}`} />
              <span className={`text-sm capitalize transition-all duration-700 ease-linear delay-700 group-hover:block group-hover:text-green-500 ${pathname === '/*' || pathname === '/register' ? 'block text-green-500' : 'hidden'}`}>login</span>
            </Link>
          </li>
          )}

        </ul>
      </div>
    </nav>
  );
}
