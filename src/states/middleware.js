function checkLoginForVoteAccess(store) {
  return (next) => (action) => {
    if (action.type === 'UP_VOTE_THREAD' || action.type === 'DOWN_VOTE_THREAD') {
      const { authUser } = store.getState();

      if (authUser === null || !authUser) {
        alert('anda harus login terlebih dahulu');
        return;
      }
    }

    next(action);
  };
}

export { checkLoginForVoteAccess };
