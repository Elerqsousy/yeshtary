import React from 'react';
import ProductItem from 'components/shared/productItem';

import { dummyProductsData } from './utils';
import Button from 'components/shared/button';
import Section from 'components/shared/section';

import '../styles/itemsFreeDisplay.scss';

class ItemsFreeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCount: 8,
    };
  }

  incrementDisplayedItems = () => {
    this.setState({ productsCount: this.state.productsCount + 8 });
  };

  render() {
    return (
      <Section
        title='Our Special Selection'
        subtitle='Premium products recommended just for you.'
      >
        <div className='items-free-display'>
          <div className='item-container '>
            {dummyProductsData
              .slice(0, this.state.productsCount)
              .map((item) => (
                <ProductItem
                  key={item.id}
                  data={item}
                  addCartItem={this.props.addCartItem}
                />
              ))}
          </div>

          {this.state.productsCount <= dummyProductsData.length && (
            <Button onClick={this.incrementDisplayedItems}>Show More</Button>
          )}
        </div>
      </Section>
    );
  }
}

export default ItemsFreeDisplay;
