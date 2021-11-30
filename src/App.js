import React from 'react';

import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

const App = function () {
    return (
      <>
        <Header />
        <Login />
        <GlobalStyles />
      </>
    )
}

export default App
