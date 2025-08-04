// LiveInput.js
import { useState } from 'react';

const LiveInput = () => {
  const [value, setValue] = useState('');

  return (
    <div className="bg-green-100 border rounded shadow p-4">
      <label className="block mb-2 font-semibold">Live Input:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <p className="mt-2 text-sm">You typed: {value}</p>
    </div>
  );
};

export default LiveInput;