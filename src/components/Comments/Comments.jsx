import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Comments() {
  const [comment, setComment] = useState('');
  const history = useHistory();

  const sendComments = () => {
    history.push('/review');
  };
  return (
    <div data-testid="input">
      <h4>Comments</h4>
      <textarea
        value={comment}
        onChange={(event) =>
          setComment((v) =>
            event.target.validity.valid ? event.target.value : v
          )
        }
      />
      <button onClick={sendComments}>NEXT</button>
    </div>
  );
}
export default Comments;
