import Todo from './Todo';

const TodoList = ({ todos }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <p>Add Some Todo !</p>;
    return todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} />;
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
