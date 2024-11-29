import React from 'react';

const ListItemComponent = (props) => {
   return (
      <div>
         <li>
            {props.index} {props.name}
         </li>
         {props.children}
      </div>
   );
};

export default ListItemComponent;
