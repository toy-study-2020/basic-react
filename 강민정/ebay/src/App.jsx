import React from 'react';
import FetchAPI from './action/FetchAPI';
import Header from './components/Header';
import './style/main.scss';

const App = () => {
  return (
    <>
      <Header />
      <FetchAPI API="menu" />
      <FetchAPI API="mainStore" />
      <FetchAPI API="mainBest" />
      <FetchAPI API="mainEvent" />
      <FetchAPI API="mainProducts" />
    </>
  );
}

export default App;