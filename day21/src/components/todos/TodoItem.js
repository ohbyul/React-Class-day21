import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const TodoItem = ({item }) => {
    const { id, text, isChecked} =item
    const {onDel , onToggle } = useContext(TodoContext)
    
    return (
        <li style={{color : isChecked? 'tomato' : '#000'}}>
            <input type = "checkbox" checked={isChecked} onChange={ ()=>onToggle(id) } />
            {text}
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;