import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Supported() {
  const [scoreSupported, setScoreSupported] = useState('');
  const history = useHistory();

  const sendSupported = () => {
    history.push('/comments');
  };
  return (
    <div data-testid="input">
      <h4>Supported?</h4>
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
      <button onClick={sendSupported}>NEXT</button>
    </div>
  );
}

export default Supported;
