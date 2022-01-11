import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const {data} = useContext(TodoContext)
    //매번할때마다 관리자를 끌어와야한다.

    return (
        <ul>
            {
                data.map(item => <TodoItem key={item.id} item={item}/>)
            }
        </ul>
    );
};

export default TodoList;