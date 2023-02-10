const Todo = ({ todo }) => {
  return (
    <div key={todo.id} className='flex flex-col items-center w-[20rem] my-2'>
      <div className='my-2'>{todo.text}</div>
      <div className='flex items-center justify-between'>
        <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
          Edit
        </button>
        <button className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
          Complete
        </button>
      </div>
    </div>
  );
};

export default Todo;
