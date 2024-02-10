import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Review() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FEEDBACK_LIST_ADD',
      payload: {
        feeling: 1,
        understanding: 2,
        support: 3,
        comments: 'dummy test info',
      },
    });
  };

  return (
    <div>
      <p>summarize previously entered scores here</p>
      <button onSubmit={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default Review;
