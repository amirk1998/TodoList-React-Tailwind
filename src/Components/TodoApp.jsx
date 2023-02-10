import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: input,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    // console.log(id);
    // item => findIndex => clone => isCompleted = !isCompleted => Add to Todos

    const index = todos.findIndex((item) => item.id === id);
    // clone : DO NOT MUTATE
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    // clone Todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const filterdTodo = todos.filter((item) => item.id !== id);
    setTodos(filterdTodo);
  };

  return (
    <div className='flex flex-col items-center w-[40rem] bg-white border-[1px] border-solid border-stone-300 rounded-[5px] p-2 text-lg'>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeTodo} onDelete={removeTodo} />
    </div>
  );
};

export default TodoApp;
