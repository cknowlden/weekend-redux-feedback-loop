import React, { useState } from 'react';

function Comments() {
  const [comment, setComment] = useState('');
  return (
    <div data-testid="input">
      <h4>Supported?</h4>
      <textarea
        value={comment}
        onChange={(event) =>
          setComment((v) =>
            event.target.validity.valid ? event.target.value : v
          )
        }
      />
    </div>
  );
}
export default Comments;
