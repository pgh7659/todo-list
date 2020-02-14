import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component {
  id = 1;
  colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

  state = {
    input: '',
    todos: [],
    color: this.colors[0]
  }

  // 색상 변경 이벤트
  handleChangeColor = (color) => {
    console.log(color);
    this.setState({
      color : color
    });
  }

  // 목록 삭제
  handleRemove = (id) => {
    const { todos } = this.state;

    // 필요없이 setState에서 한번에!
    // const newTodos = todos.filter(info => info.id !== id);

    this.setState({
      todos : todos.filter(info => info.id !== id)
    });
  }

  // checkbox toggle
  handleToggle = (id) => {
    const {todos} = this.state;

    // id에 해당하는 item 찾기
    const index = todos.findIndex(todo => todo.id === id);
    // 선택한 객체
    const selected = todos[index];

    // 선택한 객체 복사
    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked : !selected.checked // checked만 반전시킴
    };

    // 혹은 이렇게 nextTodos 생성하지않고 setState만으로!!
    // this.setState({
    //   todos : [
    //     ...todos.slice(0, index),
    //     {
    //       ...selected,
    //       checked : !selected.checked
    //     },
    //     ...todos[index + 1, todos.length]
    //   ]
    // });

    // state update
    this.setState({
      todos : nextTodos
    });
  }

  // input 입력 시
  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  // input 내용 등록 시
  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos : [...todos, {id: this.id++, text: input, checked: false, color : color}]
    });
  }

  // enter키 이벤트
  handlekeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const { input, todos, color } = this.state;
    const { handleChange, handleCreate, handlekeyPress, handleToggle, handleRemove, handleChangeColor } = this;
    console.log('App.js[render] => ' + todos);
    return (
      <div>
        <TodoListTemplate form={
          <Form
            value={input}
            color={color}
            onKeyPress={handlekeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }>
          <Palette colors={this.colors} onClick={handleChangeColor}/>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>

        </TodoListTemplate>
      </div>
    )
  }
}

export default App;
