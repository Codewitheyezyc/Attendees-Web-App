import { useReducer } from 'react';
import { ADMIN } from '../../data/datas';
import { LoginAuthContext } from './LoginAuthContext';

const initialState = {
  user: null,
  isAuthenticated: false,
  username: '',
  password: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'logout':
      return initialState;

    default:
      throw new Error('Unknown Action');
  }
}

export function LoginAuthProvider({ children }) {
  const [{ user, isAuthenticated, password, username }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function login(username, password) {
    if (username === ADMIN.username && password === ADMIN.password)
      dispatch({ type: 'login', payload: ADMIN });
  }

  function logout() {
    dispatch({ type: 'logout' });
  }
  return (
    <LoginAuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        username,
        password,
        dispatch,
      }}
    >
      {children}
    </LoginAuthContext.Provider>
  );
}
