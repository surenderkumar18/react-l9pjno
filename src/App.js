import React from "react";
import CountUseState from './CountUseState';
import AsyncWithHooks from './AsyncWithHooks';
import "./style.css";

export default function App() {
  return (
    <div>
     <CountUseState age="40"/>
     <AsyncWithHooks />
    </div>
  );
}
