const initialState = {
  isLoggedIn: false,

  userId: '',
  username: '',
  password: '',
  allMoney: 0,
  operations: [
    {
      operationId: 0,
      userId: 0,
      title: '',
      price: 0,
      date: '',
      description: '',
      currentMoney: 0,
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
        allMoney: action.payload.data.allMoney,
        operations: [Array(...action.payload.data.operation)],
      };
    case 'LOGOUT':
      return {
        users: {},
      };
    case 'ADD_OPERATION_MONEY':
      return {
        ...state,
        allMoney: action.payload.data.allMoney,
        operations: [Array(...action.payload.data.operation)],
      };

    default:
      return state;
  }
};

export default rootReducer;
