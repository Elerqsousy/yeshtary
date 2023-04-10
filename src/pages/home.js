import React from 'react';
import Banner from 'components/banner';
import PageContent from 'components/shared/pageContent';
import ProductItem from 'components/shared/productItem';

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <PageContent>
        <ProductItem />
      </PageContent>
    </React.Fragment>
  );
};

export default Home;
