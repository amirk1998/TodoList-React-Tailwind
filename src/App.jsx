import { useState } from 'react';
import TodoApp from './Components/TodoApp';

function App() {
  return (
    <div className='w-full h-screen flex flex-col items-center mt-5 p-3 bg-gray-200'>
      <h1 className='mb-8 text-4xl font-bold '>TodoList App</h1>
      <TodoApp />
    </div>
  );
}

export default App;

//TODO=> E88

// TODO => Exercise E87 => use react-select for filter => All , completed , uncompleted
//Review => Edit E83
