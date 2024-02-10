import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {
  const dispatch = useDispatch();
  const history = useHistory();
  const reviewFeeling = useSelector((store) => store.addFeeling.feeling);
  const reviewUnderstanding = useSelector(
    (store) => store.addUnderstanding.understanding
  );
  const reviewSupport = useSelector((store) => store.addSupport.support);
  const reviewComment = useSelector((store) => store.addComment.comment);
  // console.log('review feeling', reviewFeeling);

  const sendReview = () => {
    history.push('/submitted');
    // alert('Your feedback has been submitted!');
  };

  const combineReview = () => {
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
  const handleSubmit = (event) => {
    sendReview();
    combineReview();
    event.preventDefault();

    // axios
    //   .post('/api/feedback/submit', { title, author })
    //   .then((response) => {
    //     alert('feedback submitted!');
    //   })
    //   .catch((error) => {
    //     console.log('ERROR:', error);
    //   });
  };

  return (
    <div>
      <h3>Feelings: {reviewFeeling}</h3>
      <h3>Understanding: {reviewUnderstanding}</h3>
      <h3>Support: {reviewSupport}</h3>
      <h3>Comments: {reviewComment} </h3>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default Review;
