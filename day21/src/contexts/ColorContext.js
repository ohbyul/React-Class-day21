import React, { createContext, useMemo, useState } from 'react';

/*

export const ColorContext = createContext()
createContext, React.createContext(defaultValue)
React Context 는 전역데이터를 담고 있는 하나의 저장공간

Provider 는 value 값을 props 를 받아서 하위에 있는 컴포넌트에 전달 ( 자식, 자손)

다자인 ( 화면에 보이는 UI에)
useContext() 사용하여 value값을 가져올수 있다. 단, 전역 데이터를 담고 있는 하나의 저장공간을 import를 해야한다.
*/





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

    const value = useMemo( () => ({color,onRed,onGreen,onTomato,onPink,onSkyblue}) 
    , [color,onRed,onGreen,onTomato,onPink,onSkyblue])

    return (
        <ColorContext.Provider value={value}>
            { props.children }
            {/* <Color /> */}
            {/* 나는 모든 행동을 만들고 컬러한테 만들어줄꺼야 */}
        </ColorContext.Provider>
    );
};

export default ColorProvider;