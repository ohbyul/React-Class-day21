import React, { createContext, useState } from 'react';

export const TodoContext = createContext()

const TodoProvider = (props) => {
    const [data, setData ] = useState([
        {id : 1 , text : '운동하기' , isChecked : false },
        {id : 2 , text : '밥먹기' , isChecked : true },
        {id : 3 , text : '청소하기' , isChecked : true },
        {id : 4 , text : '빨래널기' , isChecked : false },
        {id : 5 , text : '옷 정리' , isChecked : false },
    ])

    //삭제
    const onDel = (id) => {
        setData( data.filter( item => item.id !== id))
    }
    //수정
    const onToggle = ( id ) => {
        //오늘 1.11 진로는 여기까지
    }
    return (
        <TodoContext.Provider value={{ data ,onDel , onToggle }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;