import React from 'react';

interface Props {
  children: JSX.Element;
  id: string;
}

const MainWrapper: React.FC<Props> = ({ children, id }: Props) => {
  return (
    <main id={id} className="sticky top-0 w-full h-screen overflow-y-auto">
      {children}
    </main>
  );
};

export default MainWrapper;
