import React from 'react';
import Navbar from './navbar/navbar';
import Header from './header/header';
import Container from './container/container';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-3/10">
          <Header />
        </div>
        <div className="w-7/10">
          <Container />
        </div>
      </div>
    </div>
  );
};

export default App;