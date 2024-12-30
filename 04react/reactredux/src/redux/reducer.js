<<<<<<< HEAD
const init = {
  value: 100,
  title: "test",
};

const reducer = (state = init, action) => {
  console.log(state);
  console.log(action.type);
  if (action.type == "up") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type == "down") {
    return { ...state, value: state.value - action.payload };
  }
  return state;
};

export default reducer;
=======
const initalData = {
    value:10,
    title:"test",
  };
  
  const reducer = (state = initalData,action) => {
    console.log(state);
    console.log(action);
  
    if(action.type=="up"){
      return {...state, value:state.value + action.payload} 
    }
    else if(action.type=="down"){
      return {...state, value:state.value - action.payload} 
    }
    
    return state
  }

  export default reducer
>>>>>>> 80a304dc839f4f3b527fb021905f8f0409e113a6
