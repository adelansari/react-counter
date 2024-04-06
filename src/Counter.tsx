import { useState, FC } from 'react';
import attack from './assets/attack.png';
import defend from './assets/defend.png';

const WIN_POINTS = 15;
const LOSE_POINTS = -15;

const Counter: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<string>('');
  const [lastPlay, setLastPlay] = useState<string>('');

  const handlePlay = (isAttack: boolean): void => {
    setCounter((preCounter: number) => {
      const randomValue: number = Math.round(Math.random() * 10);
      let newCount: number = isAttack ? preCounter + randomValue : preCounter - randomValue;
      setLastPlay(isAttack ? 'Attacked' : 'Defended');

      setGameStatus(newCount > WIN_POINTS ? 'You Won!' : newCount < LOSE_POINTS ? 'You Lose!' : '');
      return newCount;
    });
  };

  const handleReset = (): void => {
    setCounter(0);
  };

  const handleRandomPlay = (): void => {
    let playMode: number = Math.round(Math.random());
    handlePlay(playMode === 0);
  };

  return (
    <div className='row text-white text-center w-100'>
      <h1>Counter: {counter} </h1>
      <p>You win at +10 points and lose at -10 points</p>
      <p>Let's Play: {lastPlay} </p>
      <p style={{ color: gameStatus === 'You Won!' ? 'lime' : gameStatus === 'You Lose!' ? 'tomato' : 'cyan' }}>
        Game status: {gameStatus}
      </p>
      <div className='col-6 col-md-3 offset-md-3'>
        <img
          className='p-4 rounded'
          src={attack}
          alt='Attack'
          onClick={() => handlePlay(true)}
          style={{ cursor: 'pointer', width: '100%', border: '2px solid lime' }}
        />
      </div>
      <div className='col-6 col-md-3'>
        <img
          className='p-4 rounded'
          src={defend}
          alt='Defend'
          onClick={() => handlePlay(false)}
          style={{ cursor: 'pointer', width: '100%', border: '2px solid tomato' }}
        />
      </div>

      <div className='col-12 col-md-4 offset-md-4'>
        <button onClick={handleRandomPlay} className='btn btn-secondary w-100 mt-2'>
          Random Play
        </button>
        <button onClick={handleReset} className='btn btn-warning w-100 mt-2'>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
