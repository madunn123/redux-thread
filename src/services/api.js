import { getStateFromLocalStorage } from '../utils/helper';

const BASE_URL = import.meta.env.API_PRODUCTION || 'https://forum-api.dicoding.dev/v1';

async function apiServices({ url, method = 'GET', body }) {
  const token = getStateFromLocalStorage('token');

  const response = await fetch(`${BASE_URL}/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  return response;
}

async function registerAPI({ name, email, password }) {
  const response = await apiServices({ url: 'register', method: 'POST', body: { name, email, password } });
  const responseJson = await response.json();

  const { status, message } = responseJson;

  if (status !== 'success') {
    alert(message);
  } if (status === 'success') {
    alert(message);
  }

  return responseJson;
}

async function loginAPI({ email, password }) {
  const response = await apiServices({ url: 'login', method: 'POST', body: { email, password } });
  const responseJson = await response.json();

  const { data: { token }, status, message } = responseJson;

  if (status !== 'success') {
    alert(message);
  } if (status === 'success') {
    alert(message);
  }

  return token;
}

async function seeAllUsersAPI() {
  const response = await apiServices({ url: 'users', method: 'GET' });
  const responseJson = await response.json();

  const { data: { users } } = responseJson;

  return users;
}

async function seeOwnProfileAPI() {
  const response = await apiServices({ url: 'users/me', method: 'GET' });
  const responseJson = await response.json();

  const { data: { user } } = responseJson;

  return user;
}

async function createThreadAPI({ title, body, category }) {
  const response = await apiServices({ url: 'threads', method: 'POST', body: { title, body, category } });
  const responseJson = await response.json();

  const { status, message, data: { thread } } = responseJson;

  if (status === 'success') {
    alert(message);
  }

  return thread;
}

async function seeAllThreadsAPI() {
  const response = await apiServices({ url: 'threads', method: 'GET' });
  const responseJson = await response.json();

  const { data: { threads } } = responseJson;

  return threads;
}

async function seeDetailThreadAPI(threadId) {
  const response = await apiServices({ url: `threads/${threadId}`, method: 'GET' });
  const responseJson = await response.json();

  const { data: { detailThread } } = responseJson;

  return detailThread;
}

async function createCommentAPI({ content = '', threadId }) {
  const response = await apiServices({ url: `threads/${threadId}/comments`, method: 'POST', body: { content } });
  const responseJson = await response.json();

  const { status, message, data: { comment } } = responseJson;

  if (status !== 'success') {
    alert(message);
  } if (status === 'success') {
    alert(message);
  }

  return comment;
}

async function upVoteThreadAPI(threadId) {
  const response = await apiServices({ url: `threads/${threadId}/up-vote`, method: 'POST' });
  const responseJson = await response.json();

  const { data: { vote } } = responseJson;

  return vote;
}

async function downVoteThreadAPI(threadId) {
  const response = await apiServices({ url: `threads/${threadId}/down-vote`, method: 'POST' });
  const responseJson = await response.json();

  const { data: { vote } } = responseJson;

  return vote;
}

async function neutralizeThreadVoteAPI(threadId) {
  const response = await apiServices({ url: `threads/${threadId}/neutral-vote`, method: 'POST' });
  const responseJson = await response.json();

  const { data: { vote } } = responseJson;

  return vote;
}

async function upVoteCommentAPI({ threadId, commentId }) {
  const response = await apiServices({ url: `threads/${threadId}/comments/${commentId}/up-vote`, method: 'POST' });
  const responseJson = await response.json();

  const { data: { vote } } = responseJson;

  return vote;
}

async function downVoteCommentAPI({ threadId, commentId }) {
  const response = await apiServices({ url: `threads/${threadId}/comments/${commentId}/down-vote`, method: 'POST' });
  const responseJson = await response.json();

  const { data: { vote } } = responseJson;

  return vote;
}

async function neutralizeCommentVoteAPI({ threadId, commentId }) {
  const response = await apiServices({ url: `threads/${threadId}/comments/${commentId}/neutral-vote`, method: 'POST' });
  const responseJson = await response.json();

  const { data: { vote } } = responseJson;

  return vote;
}

async function seeLeaderboardsAPI() {
  const response = await apiServices({ url: 'leaderboards', method: 'GET' });
  const responseJson = await response.json();

  const { data: { leaderboards } } = responseJson;

  return leaderboards;
}

export {
  registerAPI, loginAPI, seeAllUsersAPI,
  seeOwnProfileAPI, createThreadAPI, seeAllThreadsAPI,
  seeDetailThreadAPI, createCommentAPI, upVoteThreadAPI,
  downVoteThreadAPI, neutralizeThreadVoteAPI, upVoteCommentAPI,
  downVoteCommentAPI, neutralizeCommentVoteAPI, seeLeaderboardsAPI,
};
