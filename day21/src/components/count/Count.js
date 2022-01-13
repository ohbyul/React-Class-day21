import React, { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { CountContext } from '../../contexts/CountContext';

const Count = () => {
    const {count,increment,decrement} = useContext(CountContext )
    const { color} = useContext(ColorContext)
    return (
        <div>
            <h1 style={{color}}>카운트 : {count} </h1>
            <p>
                <button onClick={ () => increment() }>증가</button>
                <button onClick={ () => decrement() }>감소</button>
            </p>
        </div>
    );
};

export default Count;