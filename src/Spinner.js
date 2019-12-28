import React from 'react';
import loading from './loading.svg';
const Spinner = () => {
  return (
    <div>
      <img
        style={{
          top: '30vh',
          left: '40%',
          position: 'fixed',
        }}
        src={loading}
        alt=''
      />
    </div>
  );
};

export default Spinner;
