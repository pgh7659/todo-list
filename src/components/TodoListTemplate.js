import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                TODAY TODO LIST
            </div>
            <section className="form-wrapper">
                {children.filter(info => info.type.name === 'Palette')}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children.filter(info => info.type.name === 'TodoItemList')}
            </section>
        </main>
    );
};

export default TodoListTemplate;