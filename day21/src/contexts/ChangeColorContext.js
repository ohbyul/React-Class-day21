import React, { createContext, useState } from 'react';

//관리자
export const ChangeColorContext = createContext()

const ChangeColorProvider = (props) => {

    const [ color , setColor] = useState('tomato')

    const onColor = (text) => {
        setColor(text)
    }

    return (
        <ChangeColorContext.Provider value={{color, onColor}}>
            {props.children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;