const ActionType = {
  SEE_ALL_USERS: 'SEE_ALL_USERS',
};

function seeAllUsersActionCreator(users) {
  return {
    type: ActionType.SEE_ALL_USERS,
    payload: {
      users,
    },
  };
}

export { ActionType, seeAllUsersActionCreator };
