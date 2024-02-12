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
      <h3 className="title">How well are you understanding the content?</h3>
      <h4 className="body-header">Understanding?</h4>
      <div className="body">
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
        <button className="button" onClick={handleSubmitUnderstanding}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Understanding;
