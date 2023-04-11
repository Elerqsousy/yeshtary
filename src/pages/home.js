import React from 'react';
import Banner from 'components/banner';
import PageContent from 'components/shared/pageContent';
import ItemsFreeDisplay from 'components/itemsFreeDisplay';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Banner />
        <PageContent>
          <ItemsFreeDisplay addCartItem={this.props.addCartItem} />
        </PageContent>
      </React.Fragment>
    );
  }
}

export default Home;
