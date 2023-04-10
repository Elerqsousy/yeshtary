import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Header from 'components/header';
import Page from 'components/shared/page';
// const Home = React.lazy(() => import('./pages/home'));

function App() {
  return (
    <React.Fragment>
      <Header />
      <Page>
        <Router>
          <Routes>
            <Route
              index
              element={
                <React.Suspense fallback={<>...</>}>
                  <Home />
                </React.Suspense>
              }
            />
            {/* <Route
          path='about'
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        /> */}
            <Route path='*' element={<>Not found</>} />
          </Routes>
        </Router>
      </Page>
    </React.Fragment>
  );
}

export default App;
