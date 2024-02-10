import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
      <h4>Feeling?</h4>
      <input
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
      <button onClick={handleSubmitFeeling}>NEXT</button>
    </div>
  );
}

export default Feeling;
