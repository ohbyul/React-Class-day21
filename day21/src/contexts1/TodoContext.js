import React, { createContext, useRef, useState } from 'react';

export const TodoContext = createContext()

const TodoProvider = (props) => {
    const [data, setData ] = useState([
        {id : 1 , text : '운동하기' , isChecked : false },
        {id : 2 , text : '밥먹기' , isChecked : true },
        {id : 3 , text : '청소하기' , isChecked : true },
        {id : 4 , text : '빨래널기' , isChecked : false },
        {id : 5 , text : '옷 정리' , isChecked : false },
    ])

    //인서트
    const [text , setText ] = useState('')
    const no = useRef(data.length +1)

    //글자입력 
    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }
    //추가
    const onAdd = (text) => {
        setData([
            ...data,
            {id : no.current++ , text : text , isChecked : false}
        ])
        setText('')
    }

    //삭제
    const onDel = (id) => {
        setData( data.filter( item => item.id !== id))
    }
    //수정
    const onToggle = ( id ) => {
        //오늘 1.11 진로는 여기까지
        //이부분 문법이 좀 복잡 - 0113 day 22 
        const newData = data.map(item => item.id === id ? 
            {...item , isChecked : !item.isChecked} : item)
        setData(newData)
    }
    return (
        <TodoContext.Provider value={{ data ,onDel , onToggle, text, changeInput , onAdd }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;