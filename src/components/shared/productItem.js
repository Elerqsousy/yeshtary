import classNames from 'classnames';
import '../styles/shared.scss';

const ProductItem = ({ data = {}, addCartItem = () => {}, className }) => {
  const onClick = (e) => {
    e.stopPropagation();
    addCartItem(data);
  };
  return (
    <div className={classNames('product-item-container', className)}>
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
