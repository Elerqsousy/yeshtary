import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Header from 'components/header';
import Page from 'components/shared/page';
const Cart = React.lazy(() => import('./pages/cart'));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      count: 0,
    };
  }

  addCartItem = (item) => {
    let product = this.state.cartItems.find((p) => p.id === item.id);
    if (product) {
      this.setState({
        cartItems: this.state.cartItems.map((p) => {
          if (p.id === item.id) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        }),
      });
    } else {
      this.setState({
        cartItems: [...this.state.cartItems, { ...item, quantity: 1 }],
      });
    }
    this.setState({ count: this.state.count + 1 });
  };

  removeItem = (id) => {
    let countToRemove;
    const newCart = this.state.cartItems.filter((item) => {
      countToRemove = item.quantity;
      return item.id !== id;
    });
    this.setState({
      count: this.state.count - countToRemove,
      cartItems: newCart,
    });
    console.log(id)
  };

  render() {
    return (
      <React.Fragment>
        <Page>
          <Router>
            <Header
              count={this.state.count}
            />
            <Routes>
              <Route
                index
                path='/yeshtary'
                element={<Home addCartItem={this.addCartItem} />}
              />
              <Route
                path='/yeshtary/cart'
                element={
                  <React.Suspense fallback={<>...</>}>
                    <Cart
                    cartItems={this.state.cartItems}
                    removeItem={this.removeItem}
                    />
                  </React.Suspense>
                }
              />
            </Routes>
          </Router>
        </Page>
      </React.Fragment>
    );
  }
}

export default App;
