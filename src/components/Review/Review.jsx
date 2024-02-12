import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feeling = useSelector((store) => store.addFeeling.feeling);
  const understanding = useSelector(
    (store) => store.addUnderstanding.understanding
  );
  const support = useSelector((store) => store.addSupport.support);
  const comments = useSelector((store) => store.addComment.comment);
  // const totalReview = useSelector((store) => store.combineReview);

  const sendReview = () => {
    history.push('/submitted');
    // alert('Your feedback has been submitted!');
  };

  // const combineReview = () => {
  //   dispatch({
  //     type: 'COMBINE_REVIEW',
  //     payload: {
  //       feeling: feeling,
  //       understanding: understanding,
  //       support: support,
  //       comments: comment,
  //     },
  //   });
  // };
  const handleSubmit = (event) => {
    sendReview();
    // combineReview();
    event.preventDefault();
    // console.log('total review', totalReview);

    axios
      .post('/api/feedback', {
        feeling,
        understanding,
        support,
        comments,
      })
      .then((response) => {
        alert('feedback submitted!');
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
  };

  return (
    <div>
      <h3>Feelings: {feeling}</h3>
      <h3>Understanding: {understanding}</h3>
      <h3>Support: {support}</h3>
      <h3>Comments: {comments} </h3>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default Review;
