import React, { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
const [time,setime] = React.useState(new Date().toLocaleTimeString());
React.useEffect(function(){
  setInterval(function(){
    setime(new Date().toLocaleTimeString())
  },1000);
},[]);
  return (
    <div className="App">
      <div className='clock'>
        <h1 className='text-black'>
          {time}
        </h1>
      </div>
    </div>
  );
};

export default App;