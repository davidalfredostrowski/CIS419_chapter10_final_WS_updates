import React from 'react';
import Feed from './Feed';
import Chats from './Chats';
import Bar from './components/bar';
// <Chats />
export const Main = ({ changeLoginState }) => {
  return (
    <>
      <Bar changeLoginState={changeLoginState} />
      <Feed />
	  <Chats />
</>
  );
}

export default Main;
