import { FC } from 'react';
import logo from './assets/react.svg';

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div className='py-3 px-2' style={{ borderBottom: '1px solid white' }}>
      <img src={logo} alt='logo' style={{ height: '40px', verticalAlign: 'top' }} />
      <span className='h2 pt-4 m-2 text-white'>React Counter</span>
    </div>
  );
};

export default Header;
