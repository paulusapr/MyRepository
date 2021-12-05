type Action = {
    type: string,
    payload: Array<string | number | Object>,
  }

  type State = {
    list: Array<string | number | Object>,
  };

const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
