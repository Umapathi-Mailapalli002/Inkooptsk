import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [hoverInput, setHoverInput] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^-?\d*$/.test(value)) {
      setInputValue(value);

      const num = value === '' ? NaN : parseInt(value, 10);

    if (value === '' || isNaN(num)) {
      setMessage('');
    } else if (num < 0) {
      setMessage('Enter a positive value');
    } else if (num % 2 === 0) {
      setMessage(`${num + 2}, ${num + 4}, ${num + 6}`);
    } else {
      setMessage(`${num + 2}, ${num + 4}, ${num + 6}`);
    }
    }
  };

  return (
    <>
<div className={`flex justify-center items-center h-[100vh] ${hoverInput ? "bg-gradient-to-r from-teal-400 to-blue-500" : "bg-gradient-to-r from-pink-500 to-orange-500"}`}>
<div className=''>
      <input className='rounded' onMouseEnter={() => setHoverInput(true)}
      onMouseLeave={() => setHoverInput(false)}
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <div className='h-3'>{message}</div>
    </div>

</div>

    </>
  )
}

export default App
