import { useHistory } from 'react-router-dom';

function Submitted() {
  const history = useHistory();

  const startOver = () => {
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
