import React, { useState } from 'react';

function Feeling() {
  const [score, setScore] = useState('');
  return (
    <div>
      <h1>How are you feeling today?</h1>

      <div data-testid="input">
        <h4>Feeling?</h4>
        <input
          type="number"
          min={0}
          max={5}
          pattern="[1-5]"
          value={score}
          onChange={(event) =>
            setScore((v) =>
              event.target.validity.valid ? event.target.value : v
            )
          }
        />
      </div>
    </div>
  );
}

export default Feeling;
