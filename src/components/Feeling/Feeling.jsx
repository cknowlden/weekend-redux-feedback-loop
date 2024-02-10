import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Feeling() {
  const [scoreFeeling, setScoreFeeling] = useState('');
  const history = useHistory();

  const sendFeeling = () => {
    history.push('/understanding');
  };
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
      <button onClick={sendFeeling}>NEXT</button>
    </div>
  );
}

export default Feeling;
