import React from 'react';

const ListItemComponent = (props) => {
   return (
      <div>
         <li>
            {props.element} {props.index}
         </li>
      </div>
   );
};

export default ListItemComponent;
