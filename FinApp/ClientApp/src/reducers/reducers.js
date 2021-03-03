
const initialState = {
  isLoggedIn: false,
  users: [
    {
      userId: '',
      username: '',
      password: '',
      allMoney: 0,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_SUCCESS':
      return {
        ...state,
        isLoggedIn: action.payload.data.isLoggedIn,
        userId: action.payload.data.id,
        username: action.payload.data.username,
        
        
      };
      case 'LOGOUT':
        return{
          ...state,
          isLoggedIn: false,
          users: null,
        }

    default:
      return state;
  }
};

export default rootReducer;
