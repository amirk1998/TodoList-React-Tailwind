import Select from 'react-select';

const NavBar = ({ unCompletedTodos, onChange, selectedOption }) => {
  const options = [
    { value: 'All', label: 'All' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Uncompleted', label: 'Uncompleted' },
  ];

  if (!unCompletedTodos) return <h2>Set your today tasks</h2>;
  return (
    <div className='flex flex-col items-center justify-center mb-2 h-32'>
      <div className='flex  items-center justify-center w-full text-slate-800 text-center text-3xl my-4 rounded-lg '>
        <span className='mr-4 w-7 h-7 text-violet-700  text-lg bg-indigo-100 rounded-full flex justify-center items-center'>
          {unCompletedTodos}
        </span>
        <h2>task(s) are not completed</h2>
      </div>
      <div className='flex items-center justify-between'>
        <p className='mr-4'>Filter Todos:</p>
        <Select
          value={selectedOption}
          onChange={onChange}
          options={options}
          className='w-32'
        />
      </div>
    </div>
  );
};

export default NavBar;
