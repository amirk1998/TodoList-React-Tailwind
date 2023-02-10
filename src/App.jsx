import { useState } from 'react';
import TodoApp from './Components/TodoApp';

function App() {
  return (
    <div className='w-full flex flex-col items-center mt-5 p-3'>
      <h1 className='mb-8 text-4xl font-bold '>TodoList App</h1>
      {/* <div className='flex justify-center w-[40rem] bg-white border-[1px] border-solid border-stone-300 rounded-[5px] p-1'></div> */}
      <TodoApp />
    </div>
  );
}

export default App;

//TODO=> E80
