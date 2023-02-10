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

  return (
    <div className='flex flex-col items-center w-[40rem] bg-white border-[1px] border-solid border-stone-300 rounded-[5px] p-2 text-lg'>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
