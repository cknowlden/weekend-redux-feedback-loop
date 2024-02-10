import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sendReview = () => {
    history.push('/submitted');
    // alert('Your feedback has been submitted!');
  };

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
    axios
      .post('/api/feedback/submit', { title, author })
      .then((response) => {
        alert('feedback submitted!');
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
  };

  return (
    <div>
      <p>summarize previously entered scores here</p>
      <button onClick={(handleSubmit, sendReview)}>SUBMIT</button>
    </div>
  );
}

export default Review;
