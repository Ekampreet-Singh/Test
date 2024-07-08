import React, { useState } from 'react';

function InputComponent() {
  const [val, setval] = useState('');

  const Input = (e) => {setval(e.target.value);};

  return (
    <div>
      <input placeholder="Enter text" value={val} onChange={Input}/>
      <p>Your text {val}</p>
    </div>
  );
}

export default InputComponent;
