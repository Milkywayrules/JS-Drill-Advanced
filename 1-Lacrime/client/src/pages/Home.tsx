import React from 'react';
import Main from '../components/Main';

interface Props {}

const Home: React.FC<Props> = ({}: Props) => {
  return (
    <Main>
      <>
        <div className="flex-grow p-10 bg-gray-900 h-96">
          <h1>This is main home page</h1>
        </div>
        <div className="flex-grow p-10 bg-indigo-700 h-96">
          <h1>This is main home page</h1>
        </div>
        <div className="flex-grow p-10 bg-indigo-700 h-96">
          <h1>This is main home page</h1>
        </div>
      </>
    </Main>
  );
};

export default Home;
