export function login(payLoad) {
  return {
    type: '@user/LOGIN',
    payLoad,
  };
}

export function logout() {
  return {
    type: '@user/LOGOUT',
  };
}
