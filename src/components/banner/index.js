import React from 'react';
import classNames from 'classnames';

import '../styles/banner.scss';

import bannerOneIcn from 'images/dynamic/banner1.jpg';
import bannerTwoIcn from 'images/dynamic/banner2.png';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      active: true,
    };
  }

  setTimer = () => (
    setInterval(() => {
      this.setState({ active: !this.state.active });
    }, 7000)
  )

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    clearInterval(this.setTimer);
  }

  render() {
    return (
      <div className='banner-container'>
        <div className='images-container'>
          <div
            className={classNames('img-container one', {
              'active-item': this.state.active,
            })}
          >
            <img src={bannerOneIcn} alt='a man' />
          </div>
          <div
            className={classNames('img-container two', {
              'active-item': !this.state.active,
            })}
          >
            <img src={bannerTwoIcn} alt='a woman' />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
