export const updateLogin = (name, id, role) => {
  // Object to return
  return {
    type: 'UPDATE_USER',
    payload: {
      name: name,
      id: id,
      role: role
    }
  };
};

export const updateLogout = () => {
  return {
    type: 'LOGOUT_USER'
  };
};

export const updateCompare = (userid) => {
  return {
    type: 'UPDATE_COMPARE',
    payload: {
      userid: userid
    }
  }
}

export const resetCompare = () => {
  return {
    type: 'RESET_COMPARE'
  }
}