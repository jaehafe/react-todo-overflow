import React from 'react';
import { GlobalStyles } from './style/GlobalStyle';
import ResetCss from './style/ResetCss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
};

export default App;
