// /app/src/components/Home.js
import React from 'react';
import Card from './Util/Card';

const Home = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Home Page</h1>
      <Card title="Welcome to our website!" content="This is the home page content." />
    </div>
  );
};

export default Home;
