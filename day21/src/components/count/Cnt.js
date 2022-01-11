import React, { useContext } from 'react';
import { CntContext } from '../../contexts/CntContext';

const Cnt = () => {

    const {state ,dispatch } = useContext(CntContext)
    return (
        <div>
            <h1>카운트 : {state.count} </h1>
            <p>
                <button onClick={()=> dispatch( {type:'INCREMENT' , step : 10} ) }>증가</button>
                <button onClick={()=> dispatch( {type:'DECREMENT' , step : 10} ) }>감소</button>
                <button onClick={()=> dispatch( {type:'RESETE' , step : 10} ) }>초기화</button>
            </p>
        </div>
    );
};

export default Cnt;