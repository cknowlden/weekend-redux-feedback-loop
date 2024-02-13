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

  const sendReview = () => {
    history.push('/submitted');
  };

  const handleSubmit = (event) => {
    sendReview();

    event.preventDefault();

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
    <div data-testid="input">
      <h3>Feelings: {feeling}</h3>
      <h3>Understanding: {understanding}</h3>
      <h3>Support: {support}</h3>
      <h3>Comments: {comments} </h3>
      <button onClick={handleSubmit} data-testid="next">
        SUBMIT
      </button>
    </div>
  );
}

export default Review;
