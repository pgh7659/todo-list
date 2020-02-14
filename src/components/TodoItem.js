import React, { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component {
    // checked가 변한 경우에만 렌더링
    shouldComponentUpdate(nextProps, nextState) {
        // if(this.props.checked === nextProps.ckecked) {
        //     return false;
        // }

        // return true;
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, color, onToggle, onRemove } = this.props;
        console.log('TodoItem => ' + id + ':' + text);
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id);
                }}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div style={{color:color}}>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;