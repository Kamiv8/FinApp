
const initialState = {
  isLoggedIn: false,
  users: [
    {
      userId: '',
      username: '',
      password: '',
      allMoney: 0,
        title: '',
        price: 0,
        date: '',
        description: ''
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
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        users: null,
      };
    case 'ADD_OPERATION_MONEY':
      console.log(`${action.payload.data.allMoney}     [from reducers]`);
      return {
        ...state,
        allMoney: action.payload.allMoney,
        
      };
      case 'GET_DATA_OPERATION':
      console.log(`${action.payload.data.allMoney}     [from reducers]`);

        return {
          ...state,
          allMoney: action.payload.data.allMoney,
        };

    default:
      return state;
  }

};

export default rootReducer;
