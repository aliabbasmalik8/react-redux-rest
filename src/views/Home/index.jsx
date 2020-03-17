import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <Link to='/accounts/signin'>sigin</Link>
      <Link to='/accounts/signup'>signup</Link>
    </div>
  );
}

export default Home;
