import React, { useState } from 'react';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function Form() {
  const [page, setPage] = useState(0);

  const pageTitles = [
    'How are you feeling today?',
    'How well are you understanding the content?',
    'How well are you being supported?',
    'Any comments you want to leave?',
    'Review Your Feedback',
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <Feeling />;
    } else if (page === 1) {
      return <Understanding />;
    } else if (page === 2) {
      return <Supported />;
    } else if (page === 3) {
      return <Comments />;
    } else {
      return <Review />;
    }
  };

  return (
    <>
      <div className="form">
        <div className="progressBar">
          <div
            style={{
              width:
                page === 0
                  ? '20%'
                  : page == 1
                  ? '40%'
                  : page == 2
                  ? '60%'
                  : page == 3
                  ? '80%'
                  : '100%',
            }}
          ></div>
        </div>
        <div className="form-container">
          <div className="titles">
            <h1>{pageTitles[page]} </h1>
            <div>{pageDisplay()}</div>
          </div>
          <div className="button">
            <button
              disabled={page == pageTitles.length - 1}
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
            >
              {' '}
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
