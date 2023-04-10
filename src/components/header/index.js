import classNames from 'classnames';

import 'components/styles/header.scss';

import menuIcn from 'images/static/menu-icon.svg';
import Logo from 'images/static/logo-yellow.svg';
import cartIcn from 'images/static/shopping-cart.svg';
import heartIcn from 'images/static/heart.svg';
import userIcn from 'images/static/user.svg';

const Header = () => {
  return (
    <header className={classNames('header')}>
      <nav className='first-nav'>
        <div className='left-container'>
          <button onClick={() => {}} className='menu-btn'>
            <img className='menu-icon' src={menuIcn} alt='menu' />
          </button>
          <img className='logo' src={Logo} alt='logo' />
        </div>
        <ul className='right-container'>
          <li className='list-item'>
            <div className='cart-container'>
              <span className='cart-count'>2</span>
              <img className='icon' src={cartIcn} alt='Cart' />
            </div>
            <span className='description'>Cart</span>
          </li>
          <li className='list-item'>
            <img className='icon' src={heartIcn} alt='Wishlist' />
            <span className='description'>Wishlist</span>
          </li>
          <li className='list-item'>
            <img className='icon' src={userIcn} alt='Profile' />
            <span className='description'>Login</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
