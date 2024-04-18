import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import authReducer from './authUser/reducer';
import leaderboardReducer from './leaderboard/reducer';
import { checkLoginForVoteAccess } from './middleware';
import detailThreadReducer from './detailThread/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authUser'],
  blacklist: ['loadingBar'],
};

const rootReducer = combineReducers({
  authUser: authReducer,
  threads: threadsReducer,
  users: usersReducer,
  leaderboard: leaderboardReducer,
  detailThread: detailThreadReducer,
  loadingBar: loadingBarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: false,
    }),
    checkLoginForVoteAccess,
  ],
});

const persistor = persistStore(store);

export { store, persistor };
