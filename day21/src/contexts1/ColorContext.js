import React, { createContext, useState } from 'react';

export const ColorContext = createContext()
//관리자

//사용자가 임의로 만들어도된다.
const ColorProvider = ( props ) => {
    //상태값 , 함수 모두 작성한다
    const [color, setColor] = useState('hotpink')
    const onRed = () => { setColor('red') }
    const onGreen = () => { setColor('green') }
    const onPink = () => { setColor('pink') }
    const onTomato = () => { setColor('tomato') }
    const onSkyblue = () => { setColor('skyblue') }
    return (
        <ColorContext.Provider value={{color,onRed,onGreen,onTomato,onPink,onSkyblue}}>
            { props.children }
            {/* <Color /> */}
            {/* 나는 모든 행동을 만들고 컬러한테 만들어줄꺼야 */}
        </ColorContext.Provider>
    );
};

export default ColorProvider;