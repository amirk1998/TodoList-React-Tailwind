import { BiTrash } from 'react-icons/bi';
const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div
      key={todo.id}
      className='flex items-center justify-between w-[33rem] my-4'
    >
      <div
        onClick={onComplete}
        className={
          todo.isCompleted
            ? 'line-through text-stone-300 cursor-pointer w-80  '
            : 'cursor-pointer w-80'
        }
      >
        {todo.text}
      </div>
      <div onClick={onEdit} className='flex items-center justify-between'>
        <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
          Edit
        </button>
        <button
          onClick={onDelete}
          className='flex items-center justify-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-90'
        >
          <BiTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
