import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Feeling() {
  const [scoreFeeling, setScoreFeeling] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const sendFeeling = () => {
    event.preventDefault();
    history.push('/understanding');
    handleSubmitFeeling();
  };

  const handleSubmitFeeling = () => {
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
      <button onClick={sendFeeling}>NEXT</button>
    </div>
  );
}

export default Feeling;
