import { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert('Enter Todo !!!');
      return;
    }
    props.addTodoHandler(input);
    setInput('');
  };

  return (
    <div className='w-[20rem]'>
      <form
        className=' flex flex-row items-center justify-between gap-x-2'
        onSubmit={submitHandler}
      >
        <input
          type='text'
          value={input}
          onChange={changeHandler}
          className=' mt-1  block w-full h-8 px-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
        />
        <button className=' text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 '>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
