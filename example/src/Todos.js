import React, { useEffect, useState, createRef } from 'react';
import { connect } from 'react-redux';
import { select } from './store';

const Todos = ({ todos, getTodos, removeTodo, updateTodo, createTodo }) => {
  const [initialized, setInitialized] = useState(false);
  const inputRef = createRef();

  useEffect(() => {
    if (!initialized) {
      getTodos();
      setInitialized(true);
    }
  });

  return (
    <div>
      <input ref={inputRef} />
      <button
        type="button"
        disabled={inputRef.current}
        onClick={() =>
          createTodo({
            title: inputRef.current.value,
            completed: false,
            id: Date.now()
          })
        }
      >
        create new todo
      </button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                updateTodo({ ...todo, completed: !todo.completed })
              }
            />
            <span style={{ fontStyle: '' }}>Title: {todo.title}</span>
            <button type="button" onClick={() => removeTodo(todo.id)}>
              Remove Todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  todos: select.todos.list(state)
});

const mapDispatch = ({ todos }) => ({
  getTodos: todos.getAsync,
  removeTodo: (id, onSuccess, onFail) =>
    todos.removeAsync({
      id,
      onSuccess,
      onFail,
      updateList: true
    }),
  updateTodo: (data, onSuccess, onFail) =>
    todos.updateAsync({
      data,
      onSuccess,
      onFail,
      updateList: true
    }),
  createTodo: (data, onSuccess, onFail) =>
    todos.createAsync({
      data,
      onSuccess,
      onFail,
      updateList: true
    })
});

export default connect(
  mapState,
  mapDispatch
)(Todos);
