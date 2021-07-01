const initialState = {
  isLoggedIn: false,

  userId: '',
  username: '',
  password: '',
  allMoney: 0,
  mainColor: '',
  groupName: '',
  profileImage: {
    data: 0,
    contentType: '',
  },
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTHENTICATE_SUCCESS':
      return {
        ...state,
        isLoggedIn: payload.data.isLoggedIn,
        userId: payload.data.id,
        username: payload.data.username,
        allMoney: payload.data.allMoney,
        mainColor: payload.data.mainColor,
        operations: Array(...payload.data.operation),
      };
    case 'LOGOUT':
      return initialState;

    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: payload.data.username,
      };
    case 'CHANGE_PASSWORD':
      return {
        ...state,
        password: payload.data.password,
      };
    case 'FETCH_IMAGE':
      return {
        ...state,
        profileImage: {
          data: payload.headers,
        },
      };

    case 'CHANGE_COLOR': {
      return {
        ...state,
        mainColor: payload.data.mainColor,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
