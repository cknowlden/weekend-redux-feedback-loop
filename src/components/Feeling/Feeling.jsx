import React, { useState } from 'react';

function Feeling() {
  const [scoreFeeling, setScoreFeeling] = useState('');
  return (
    <div data-testid="input">
      <h4>Feeling?</h4>
      <input
        type="number"
        min={0}
        max={5}
        value={scoreFeeling}
        onChange={(event) =>
          setScoreFeeling((v) =>
            event.target.validity.valid ? event.target.value : v
          )
        }
      />
    </div>
  );
}

export default Feeling;
