import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All');

  useEffect(() => {
    filterTodoFunction(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
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
    const filteredTodo = todos.filter((item) => item.id !== id);
    setTodos(filteredTodo);
  };

  const updateTodo = (NewID, newValue) => {
    const index = todos.findIndex((todo) => todo.id === NewID);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodoFunction = (status) => {
    switch (status) {
      case 'Completed':
        setFilterTodos(todos.filter((t) => t.isCompleted));
        break;
      case 'Uncompleted':
        setFilterTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilterTodos(todos);
    }
  };

  const selectHandler = (e) => {
    console.log(e);
    setSelectedOption(e);
    filterTodoFunction(e.value);
  };

  return (
    <div className='flex flex-col items-center'>
      <NavBar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        selectedOption={selectedOption}
        onChange={selectHandler}
      />
      <div className='flex flex-col items-center w-[40rem] bg-white border-[1px] border-solid border-stone-300 rounded-[5px] p-2 text-lg'>
        <TodoForm submitTodo={addTodo} />
        <TodoList
          todos={filterTodos}
          onComplete={completeTodo}
          onDelete={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
