import React, { useState } from 'react';

function Understanding() {
  const [scoreUnderstanding, setScoreUnderstanding] = useState('');
  return (
    <div data-testid="input">
      <h4>Understanding?</h4>
      <input
        type="number"
        min={0}
        max={5}
        value={scoreUnderstanding}
        onChange={(event) =>
          setScoreUnderstanding((v) =>
            event.target.validity.valid ? event.target.value : v
          )
        }
      />
    </div>
  );
}

export default Understanding;
