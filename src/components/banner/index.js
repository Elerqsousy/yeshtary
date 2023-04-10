import React from 'react';
import classNames from 'classnames';

import '../styles/banner.scss';

import bannerOneIcn from 'images/dynamic/banner1.jpg';
import bannerTwoIcn from 'images/dynamic/banner2.png';

const Banner = () => {
  const [active, setActive] = React.useState(true)

  React.useEffect(() => {
    const setTimer = setInterval(() => {
      setActive(!active)
    }, 7000)
    return () => {
      clearInterval(setTimer);
    };
  }, [active]);

  return (
    <div className='banner-container'>
      <div className='images-container'>
        <div
          className={classNames('img-container one', { 'active-item': active })}
        >
          <img src={bannerOneIcn} alt='a man' />
        </div>
        <div
          className={classNames('img-container two', {
            'active-item': !active
          })}
        >
          <img src={bannerTwoIcn} alt='a woman' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
