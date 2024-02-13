import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Submitted() {
  const history = useHistory();
  const dispatch = useDispatch();

  const startOver = () => {
    //DISPATCH ACTION CLEAR ALL
    dispatch({
      type: 'CLEAR',
    });
    history.push('/');
  };
  return (
    <>
      <div className="lastFeedback">
        <h1>Feedback!</h1>
      </div>
      <div>
        <h4>
          <i>Thank you!</i>
        </h4>
        <button onClick={startOver} data-testid="next">
          Leave New Feedback
        </button>
      </div>
    </>
  );
}

export default Submitted;
