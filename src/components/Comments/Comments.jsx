import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Comments() {
  const [comment, setComment] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const sendComments = () => {
    history.push('/review');
  };
  const handleSubmitFeeling = (event) => {
    sendComments();
    event.preventDefault();
    dispatch({
      type: 'ADD_COMMENT',
      payload: {
        comment: comment,
      },
    });
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
      <button onClick={handleSubmitFeeling}>NEXT</button>
    </div>
  );
}
export default Comments;
