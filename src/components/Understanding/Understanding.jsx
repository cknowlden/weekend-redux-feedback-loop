import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Understanding() {
  const [scoreUnderstanding, setScoreUnderstanding] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const sendUnderstanding = () => {
    history.push('/supported');
  };

  const handleSubmitUnderstanding = (event) => {
    sendUnderstanding();
    event.preventDefault();
    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: {
        understanding: parseInt(scoreUnderstanding),
      },
    });
  };

  return (
    <div data-testid="input">
      <h4>Understanding?</h4>
      <input
        type="number"
        min={1}
        max={5}
        value={scoreUnderstanding}
        onChange={(event) =>
          setScoreUnderstanding((v) =>
            event.target.validity.valid ? event.target.value : v
          )
        }
      />
      <button onClick={handleSubmitUnderstanding}>NEXT</button>
    </div>
  );
}

export default Understanding;
