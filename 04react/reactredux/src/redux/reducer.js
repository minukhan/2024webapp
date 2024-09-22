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