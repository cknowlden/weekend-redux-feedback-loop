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
    <div>
      <h3 className="title">Any comments you want to leave?</h3>
      <h4 className="body-header">Comments</h4>
      <div className="body">
        <textarea
          data-testid="input"
          className="input"
          value={comment}
          onChange={(event) =>
            setComment((v) =>
              event.target.validity.valid ? event.target.value : v
            )
          }
        />
        <button
          className="button"
          onClick={handleSubmitFeeling}
          data-testid="next"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
export default Comments;
