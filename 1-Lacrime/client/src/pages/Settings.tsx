import React from 'react';
import MainWrapper from '../components/MainWrapper';

interface Props {}

const Settings: React.FC<Props> = ({}: Props) => {
  return (
    <MainWrapper id="settings">
      <>
        <div className="flex-grow p-10 bg-gray-900 h-96">
          <h1>This is main settings page</h1>
        </div>
        <div className="flex-grow p-10 bg-indigo-700 h-96">
          <h1>This is main settings page</h1>
        </div>
        <div className="flex-grow p-10 bg-primary-600 h-96">
          <h1>This is main settings page</h1>
        </div>
      </>
    </MainWrapper>
  );
};

export default Settings;
