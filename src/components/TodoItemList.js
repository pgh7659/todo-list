import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    // 최적화
    // input에 입력 시, onChange 시 마다 Form은 렌더링
    // but, TodoItemList는 state.todos가 변경되었을 때만 렌더링
    shouldComponentUpdate(nextProps, nextState) {
        // 아래처럼 간결하게!!
        // if(this.props.todos === nextProps.todos) {
        //     return false;
        // }

        // return true;

        return this.props.todos !== nextProps.todos;
    }
    render() {
        const { todos, onToggle, onRemove } = this.props;
        console.log(todos);
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    text={text}
                    checked={checked}
                    id={id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;