const initialState = {
  isLoggedIn: false,

  userId: '',
  username: '',
  password: '',
  allMoney: 0,
  profileImage: {
    data: 0,
    contentType: '',
  },
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
        operations: Array(...action.payload.data.operation),
      };
    case 'LOGOUT':
      return initialState;

    case 'ADD_OPERATION_MONEY':
      return {
        ...state,
        allMoney: action.payload.data.allMoney,
        operations: Array(...action.payload.data.operation),
      };
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.payload.data.username,
      };
    case 'CHANGE_PASSWORD':
      return {
        ...state,
        password: action.payload.data.password,
      };
    case 'REMOVE_DATA':
      return {
        ...state,
        operations: [],
        allMoney: 0,
      };
    case 'FETCH_IMAGE':
      return {
        ...state,
        profileImage: {
          data: action.payload.headers,
        },
      };
    // case 'CHANGE_COLOR':
    //   return {
    //     ...state,
    //     interfaceColor: action.payload,
    //   };

    default:
      return state;
  }
};

export default rootReducer;
