const reducer = (state = {color: "black"}, action ) => {
  console.log(action);
  switch(action.type){
    case "SET_COLOR": 
      return { ...state, color: action.color };
      break;
    default:
    return state;
  }
 
}

export default reducer;