const initialState = {
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
        userId: action.payload.data.id,
        username: action.payload.data.username,
      };
    default:
      return state;
  }
};

export default rootReducer;
