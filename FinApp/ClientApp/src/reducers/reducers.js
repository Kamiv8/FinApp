
const initialState = {
  isLoggedIn: false,
  users: [
    {
      userId: '',
      username: '',
      password: '',
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
          isLoggedIn: false,
          users: null,
        }

    default:
      return state;
  }
};

export default rootReducer;
