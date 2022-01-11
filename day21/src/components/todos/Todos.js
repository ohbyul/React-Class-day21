import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
    return (
        <div>
            <h1>할일 만들기</h1>
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Todos;