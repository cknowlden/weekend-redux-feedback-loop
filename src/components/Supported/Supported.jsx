import React, { useState } from 'react';

function Supported() {
  const [scoreSupported, setScoreSupported] = useState('');
  return (
    <div data-testid="input">
      <h4>Supported?</h4>
      <input
        type="number"
        min={0}
        max={5}
        value={scoreSupported}
        onChange={(event) =>
          setScoreSupported((v) =>
            event.target.validity.valid ? event.target.value : v
          )
        }
      />
    </div>
  );
}

export default Supported;
