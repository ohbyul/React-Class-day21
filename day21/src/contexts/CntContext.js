import React, { createContext, useReducer } from 'react';

//context
export const CntContext = createContext()

//리듀서
const initialState = {count : 0}
const reducer = (state , action)=>{
    switch(action.type){
        case 'INCREMENT' : 
            return {
                count : state.count + action.step
            }
        case 'DECREMENT' : 
            return {
                count : state.count - action.step
            }
        case 'RESETE' : 
            return {
                count : 0
            }
        default : 
            return state
    }
}


//리듀서와 콘텍스트 조합
const CntProvider = (props) => {
    const [state,dispatch] = useReducer(reducer , initialState)

    return (
        <CntContext.Provider value ={{state ,dispatch }}>
            {props.children}
        </CntContext.Provider>
    );
};

export default CntProvider;