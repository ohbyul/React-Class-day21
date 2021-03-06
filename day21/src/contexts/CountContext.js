import React, { createContext, useContext, useMemo, useState } from 'react';

export const CountContext = createContext();
//관리자

const CountProvider = (props) => {
    const [count ,setCount] = useState(0)
    const increment = () => { setCount(count + 1) }
    const decrement = () => { setCount(count - 1) }

    //useMemo( () => () , [])
    const value =useMemo( () => ({count,increment,decrement}) 
    , [count,increment,decrement])

    return (
        <CountContext.Provider value={value}>
            { props.children }
        </CountContext.Provider>
    );
};

export default CountProvider;