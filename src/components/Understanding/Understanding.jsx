import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Understanding() {
  const [scoreUnderstanding, setScoreUnderstanding] = useState('');
  const history = useHistory();

  const sendUnderstanding = () => {
    history.push('/supported');
  };
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
      <button onClick={sendUnderstanding}>NEXT</button>
    </div>
  );
}

export default Understanding;
