import { useEffect, useReducer } from 'react';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const initialState = {
    form: {
      firstname: '',
      lastname: '',
      email: '',
      zone: '',
      kc: '',
      role: '',
      phoneNumber: null,
    },
    users: storedUsers,
  };

  function validateField(field, value) {
    switch (field) {
      case 'email':
        if (!value.includes('@') || !value.includes('.')) {
          return 'Invalid email format';
        }
        break;
      default:
        return '';
    }
    return '';
  }

  function handleFieldUpdate(state, action) {
    const { field, value } = action.payload;
    const error = validateField(field, value);

    return {
      ...state,
      form: {
        ...state.form,
        [field]: value,
        error,
      },
    };
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'updateField':
        return handleFieldUpdate(state, action);
      case 'addUser':
        return { ...state, users: [...state.users, state.form] };
      default:
        return state;
    }
  }

  const [
    {
      form: { firstname, lastname, email, phoneNumber, zone, kc },
      users,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  console.log(users, phoneNumber, email);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  function onChangeFun(name, e) {
    dispatch({
      type: 'updateField',
      payload: { field: name, value: e.target.value },
    });
  }

  return (
    <AuthContext.Provider
      value={{
        firstname,
        lastname,
        email,
        phoneNumber,
        zone,
        kc,
        onChangeFun,
        users,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
