import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    const fahrenheitValue = (9 / 5) * parseFloat(celsiusValue) + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <label htmlFor="celsiusInput">Enter Celsius</label>
      <input type="number" value={celsius} onChange={handleCelsiusChange} />
        <p>
            Fahrenheit temperature= {fahrenheit}°F
        </p>
    </div>
  );
}

export default TemperatureConverter;
