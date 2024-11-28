import React from 'react';

const GrandChildComponent = (props) => {
   console.log(props);
   return (
      <div>
         {/* <div>{props.newPropTodo}</div> */}
         <div>{props.myName.name}</div>
         <div>{props.myNameIsArray[0]}</div>
         <div>{props.myFunctionName()}</div>
      </div>
   );
};

export default GrandChildComponent;
