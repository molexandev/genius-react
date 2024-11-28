// import HelloWoeldComponent from './HelloWorldComponent';
// import MyClassComponent from './MyClassComponent';
// import { useState } from 'react';
import CounterComponent from './CounterComponent';
import ListComponent from './ListComponent';
import './App.css';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            {/* {<HelloWoeldComponent />}
            {<MyClassComponent />} */}
            <ListComponent />
            <CounterComponent />
         </header>
      </div>
   );
}

export default App;
