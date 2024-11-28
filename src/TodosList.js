import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const TodosList = (props) => {
   console.log(props);
   return (
      <div>
         {/* {props.id} {props.todo} {props.name} */}
         <GrandChildComponent newPropTodo={props.todo} />
      </div>
   );
};

// var 2
// const TodosList = ({ id, todo, name }) => {
//    console.log(todo);
//    return (
//       <div>
//          {id} {todo} {name}
//       </div>
//    );
// };

export default TodosList;
