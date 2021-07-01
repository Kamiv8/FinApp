const initialState = {
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
  sortedOperation: [
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




const operationReducer = (state = initialState,{type,payload})=>{

switch (type) {
  case 'ADD_OPERATION_MONEY':
    return {
      ...state,
      allMoney: payload.data.allMoney,
      operations: Array(...payload.data.operation),
    };

  case 'REMOVE_DATA':
    return {
      ...state,
      operations: [],
      allMoney: 0,
    };
  case 'SORT_DATA': {
    return {
      ...state,
      sortedOperation: payload.data,
    };
  }
  default:
    return initialState;
}


};




export default operationReducer;