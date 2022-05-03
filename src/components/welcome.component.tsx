import React, { useContext, useMemo } from 'react';
import { urlContext } from '../state/url.context';

export const Welcome = ({ match }: any): JSX.Element => {
  const { setCurrentUrl } = useContext(urlContext);

  useMemo(() => {
    setCurrentUrl(match.url);
  }, [match.url, setCurrentUrl]);

  return (
    <div className="container">
      <h1>{ match.url } Page</h1>
    </div>
  );
}

export default Welcome;
