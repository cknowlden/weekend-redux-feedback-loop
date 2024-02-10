import React, { useState } from 'react';

function Feeling() {
  return (
    <div>
      <h1>How are you feeling today?</h1>

      <div data-testid="input">
        <h4>Feeling?</h4>
        <input
          type="number"
          pattern="[1-5]*"
          value={val}
          onChange={(e) =>
            setVal((v) => (e.target.validity.valid ? e.target.value : v))
          }
        />
      </div>
    </div>
  );
}

export default Feeling;
