import React from 'react';

interface Props {
  children: JSX.Element;
}

const Main: React.FC<Props> = ({ children }: Props) => {
  return <main className="sticky top-0 w-full h-screen overflow-y-auto">{children}</main>;
};

export default Main;
