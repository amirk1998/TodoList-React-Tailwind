const NavBar = ({ unCompletedTodos }) => {
  return (
    <header className='flex items-center justify-center w-full text-slate-800 text-center text-3xl my-4 rounded-lg '>
      {unCompletedTodos ? (
        <>
          {' '}
          <span className='mr-4 w-7 h-7 text-violet-700  text-lg bg-indigo-100 rounded-full flex justify-center items-center'>
            {unCompletedTodos}
          </span>{' '}
          <h2>task(s) are not completed</h2>
        </>
      ) : (
        <h2>Set your today tasks</h2>
      )}
    </header>
  );
};

export default NavBar;
