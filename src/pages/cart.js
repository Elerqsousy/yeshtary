import PageContent from 'components/shared/pageContent';
import Section from 'components/shared/section';
import React from 'react';

import 'components/styles/cart.scss';
import Button from 'components/shared/button';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageContent>
        <Section
          title='My Cart'
          subtitle='Cart Summary'
          className='cart-page-container'
        >
          {!this.props.cartItems.length ? (
            <span>You have no items yet..</span>
          ) : (
            <React.Fragment>
              <div className='items-container'>
                {this.props.cartItems.map((item) => (
                  <div key={item.id} className='item-container'>
                    <img
                      className='item-img'
                      src={item.productImage}
                      alt={item.name}
                    />
                    <div className='description-container'>
                      <p className='name'>{item.name}</p>
                      <span className='quantity'>Quantity: {item.quantity}</span>
                      <div className='cta-container'>
                        <span>
                          {item.price * item.quantity + ' ' + item.currency}
                        </span>
                        <Button
                          onClick={() => this.props.removeItem(item.id)}
                          type='secondary'
                          className='cta-btn'
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <span className='total'>
                {this.props.cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                ) + ' EGP'}
              </span>
            </React.Fragment>
          )}
        </Section>
      </PageContent>
    );
  }
}

export default Cart;
