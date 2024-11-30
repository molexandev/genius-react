// import HelloWoeldComponent from './HelloWorldComponent';
import MyClassComponent from './MyClassComponent';
import { useState } from 'react';
// import CounterComponent from './CounterComponent';
import ListComponent from './ListComponent';
// import RenderComponent from './RenderComponent';
import './App.css';
// import { useState } from 'react';

function App() {
   const [isShowTimer, setisShowTimer] = useState(false);

   return (
      <div className="App">
         <header className="App-header">
            {isShowTimer ? <MyClassComponent /> : <ListComponent />}
            <button onClick={() => setisShowTimer((prev) => !prev)}>
               Show timer
            </button>
            {/* {<HelloWoeldComponent />} */}
            {/* {<MyClassComponent />} */}
            {/* <ListComponent /> */}
            {/* <CounterComponent /> */}
            {/* <RenderComponent /> */}
         </header>
      </div>
   );
}

export default App;
