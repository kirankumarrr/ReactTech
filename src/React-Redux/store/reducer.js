const initialState = {
    age: 24
};

const reducer =(state = initialState, action) =>{
    const newstate = {...state};
    if(action.type ==="AGE_UP"){
            newstate.age++;
    }
    if(action.type ==="AGE_DOWN")
    {
              newstate.age--;
    }
    return newstate;
}

export default reducer;