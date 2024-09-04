import React, { FC } from 'react';
import NavBar from '../NavBar/NavBar';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div>
    <NavBar />
    <h1 className="text-3xl font-bold underline">
        Hello world!
    </h1>
  </div>
);

export default Home;
