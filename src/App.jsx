import React from 'react';
import { GlobalStyles } from './style/GlobalStyle';
import ResetCss from './style/ResetCss';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <Header />
      App
    </>
  );
};

export default App;
