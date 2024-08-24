import React, { FC } from 'react';


interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <h1 className="text-3xl font-bold underline">
      Hello world!
  </h1>
);

export default Home;
