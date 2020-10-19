import React, { useRef, useEffect } from "react";

function UseRefFun() {
  const userName = useRef();
  useEffect(() => {
    userName.current.focus()
  }, []); 
  return (
    <div>
      <h2>Use ref function</h2>
      <input ref={userName} type="text" />
    </div>
  );
}
export default UseRefFun;
