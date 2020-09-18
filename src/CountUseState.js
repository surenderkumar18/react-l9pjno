import React, { useState} from 'react';

 const CountUseState= (props) => {
  const [ count, setCount ] = useState(89);
  console.log(props);
  return (
    <div>
      <h1>The count is {count}</h1>
    </div>
  );
};
CountUseState.defaultProps = {
  name: "surender"
};
export default CountUseState