import { useState } from 'react';
import TodoApp from './Components/TodoApp';

function App() {
  return (
    <div className='w-full flex flex-col items-center mt-5 p-3'>
      <h1 className='mb-8 text-4xl font-bold '>TodoList App</h1>
      <TodoApp />
    </div>
  );
}

export default App;

//TODO=> E84
//Review => Edit E83
