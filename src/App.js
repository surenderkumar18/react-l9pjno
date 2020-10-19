import React from "react";
import CountUseState from './CountUseState';
import AsyncWithHooks from './AsyncWithHooks';
import UseRefFun from './useRefFun';
import "./style.css";

export default function App() {
  return (
    <div>
    <UseRefFun />
     <CountUseState age="40"/>
     <AsyncWithHooks />
    </div>
  );
}
