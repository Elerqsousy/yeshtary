import classNames from 'classnames';
import uuid from 'react-uuid';

import '../styles/shared.scss';

import itemImg from 'images/dynamic/item-one.jpg';
import adidasSmall from 'images/dynamic/adidas-small.png';
import adidasBig from 'images/dynamic/adidas-big.png';

const dummyProduct = {
  name: 'Adidas Ultimashow Indigo BackPack',
  price: 1629,
  priceText: '1,629',
  productImage: itemImg,
  brandImage: adidasBig,
  brandSmallImage: adidasSmall,
  brandName: 'Adidas',
  currency: 'EGP',
  id: uuid(),
};

const ProductItem = ({
  data = dummyProduct,
  onPurchase = () => {},
  className,
}) => {

  const onClick = (e) => {
    e.stopPropagation()
    onPurchase()
  }
  return (
    <div
      className={classNames('product-item-container', className)}
    >
      <div className='content-container'>
        <div className='product-img-container'>
          <img
            className='product-img'
            src={data.productImage}
            alt={data.name}
          />
        </div>
        <div className='details-container'>
          <h3 className='product-name'>{data.name}</h3>
          <div className='brand-price'>
            <p>{data.priceText + ' ' + data.currency}</p>
            <img src={data.brandSmallImage} alt={data.brandName} />
          </div>
        </div>
      </div>
      <button className='cta-btn' type='button' onClick={onClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
