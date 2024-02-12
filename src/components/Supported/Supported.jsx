import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Supported() {
  const [scoreSupported, setScoreSupported] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const sendSupported = () => {
    history.push('/comments');
  };

  const handleSubmitSupported = (event) => {
    sendSupported();
    event.preventDefault();
    dispatch({
      type: 'ADD_SUPPORTED',
      payload: {
        support: parseInt(scoreSupported),
      },
    });
  };
  return (
    <div data-testid="input">
      <h3 className="title">How well are you being supported?</h3>
      <h4 className="body-header">Supported?</h4>
      <div className="body">
        <input
          type="number"
          min={1}
          max={5}
          value={scoreSupported}
          onChange={(event) =>
            setScoreSupported((v) =>
              event.target.validity.valid ? event.target.value : v
            )
          }
        />
        <button className="button" onClick={handleSubmitSupported}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Supported;
