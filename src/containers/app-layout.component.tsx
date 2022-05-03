import React from 'react';
import Header from '../components/header.component';
import { urlContext } from '../state/url.context';

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { url } = React.useContext(urlContext);

  return (
    <div>
      <Header url={url} />
      {children}
    </div>
  );
}
