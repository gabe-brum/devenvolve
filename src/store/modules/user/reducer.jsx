const defaultState = null;

export default function user(state = defaultState, { type, payLoad }) {
  switch (type) {
    case '@user/LOGIN':
      return payLoad;
    case '@user/LOGOUT':
      return defaultState;
    default:
      return state;
  }
}
