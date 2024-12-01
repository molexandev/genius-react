// import HelloWoeldComponent from './HelloWorldComponent';
// import MyClassComponent from './MyClassComponent';
// import { useEffect, useReducer, useState } from 'react';
// import CounterComponent from './CounterComponent';
// import ListComponent from './ListComponent';
// import TodoClassComponent from './TodoClassComponent';
// import RenderComponent from './RenderComponent';
// import UnmountComponent from './UnmountComponent';
// import { type } from '@testing-library/user-event/dist/type';
import './App.css';
// import { useState } from 'react';
import { useRef } from 'react';

function App() {
   const inputRef = useRef();
   console.log(inputRef.current);

   const handleFocus = () => {
      inputRef.current.focus();
      console.log(inputRef.current.value);
   };

   return (
      <div className="App">
         <header className="App-header">
            {/* {isShowTimer ? <MyClassComponent /> : <ListComponent />}
            <button onClick={() => setisShowTimer((prev) => !prev)}>
               Show timer
            </button> */}
            {/* {<HelloWoeldComponent />} */}
            {/* {<MyClassComponent />} */}
            {/* <ListComponent /> */}
            {/* <TodoClassComponent /> */}
            {/* <CounterComponent /> */}
            {/* <RenderComponent /> */}
            {/* {isMounted ? <UnmountComponent /> : <p>Text</p>} */}

            <h1>tesxt</h1>
            <input ref={inputRef} />
            <button onClick={handleFocus}>Focus me</button>
         </header>
      </div>
   );
}

export default App;
