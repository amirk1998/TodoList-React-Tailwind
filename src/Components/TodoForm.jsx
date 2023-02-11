import { useEffect, useRef, useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
    props.submitTodo(input);
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
          ref={inputRef}
          placeholder={props.edit ? 'Update Todo' : 'Add Todo'}
          className=' mt-1  block w-full h-8 px-2 rounded-md bg-gray-100 border-2 border-transparent focus:border-violet-600 focus:bg-white focus:ring-0 focus:outline-none'
        />
        <button
          type='submit'
          className=' text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 '
        >
          {props.edit ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
