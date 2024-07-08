import React, { useState } from 'react';

function Number() {
  const [count, setc] = useState(0);

  const Decrease = () => {
    if (count > 0) {
      setc(count - 1);
    }
  };

  const Increase = () => {
    if (count < 20) {
      setc(count + 1);
    }
  };

  return (
    <div>
      <button onClick={Decrease}>-</button>
      <label>{count}</label>
      <button onClick={Increase}>+</button>
    </div>
  );
}

export default Number;
