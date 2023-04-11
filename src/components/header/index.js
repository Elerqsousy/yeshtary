import classNames from 'classnames';

import 'components/styles/header.scss';

import menuIcn from 'images/static/menu-icon.svg';
import Logo from 'images/static/logo-yellow.svg';
import cartIcn from 'images/static/shopping-cart.svg';
import heartIcn from 'images/static/heart.svg';
import userIcn from 'images/static/user.svg';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={classNames('header')}>
        <nav className='first-nav'>
          <div className='left-container'>
            <button onClick={() => {}} className='menu-btn'>
              <img className='menu-icon' src={menuIcn} alt='menu' />
            </button>
            <Link to='/yeshtary'>
              <img className='logo' src={Logo} alt='logo' />
            </Link>
          </div>
          <ul className='right-container'>
            <li>
              <Link className='list-item' to='/yeshtary/cart'>
                <div className='cart-container'>
                  <span className='cart-count'>{this.props.count}</span>
                  <img className='icon' src={cartIcn} alt='Cart' />
                </div>
                <span className='description'>Cart</span>
              </Link>
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
  }
}

export default Header;
