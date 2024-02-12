import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../App/App.css';

function Feeling() {
  const [scoreFeeling, setScoreFeeling] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const sendFeeling = () => {
    history.push('/understanding');
  };

  const handleSubmitFeeling = (event) => {
    sendFeeling();
    event.preventDefault();
    dispatch({
      type: 'ADD_FEELING',
      payload: {
        feeling: parseInt(scoreFeeling),
      },
    });
  };
  return (
    <div data-testid="input">
      <h3 className="title">How are you feeling today?</h3>
      <h4 className="body-header">Feeling?</h4>
      <div className="body">
        <input
          className="input"
          type="number"
          min={1}
          max={5}
          value={scoreFeeling}
          onChange={(event) =>
            setScoreFeeling((v) =>
              event.target.validity.valid ? event.target.value : v
            )
          }
        />
        <button className="button" onClick={handleSubmitFeeling}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Feeling;
