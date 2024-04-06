const Counter = () => {
  const handleAttack = () => {
    alert('Attack Clicked!');
  };
  const handleDefence = () => {
    alert('Defend Clicked!');
  };
  return (
    <div className='row text-white'>
      <h1>Counter: </h1>
      <button onClick={handleAttack} style={{ width: '200px' }}>
        +1
      </button>
      <button onClick={handleDefence} style={{ width: '200px' }}>
        -1
      </button>
    </div>
  );
};

export default Counter;
