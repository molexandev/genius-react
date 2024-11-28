import { useState } from 'react';
import ListItemComponent from './ListItemComponent';

const ListComponent = () => {
   const [input, setInput] = useState(['']);
   const [item, setItem] = useState(['First element']);

   const onClickHandler = (input) => {
      const updatedElement = [...item, input];

      setItem(updatedElement);
      setInput('');
   };

   const onChangeHandler = (e) => {
      const value = e.target.value;
      setInput(value);
   };

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         const updatedElement = [...item, input];
         setItem(updatedElement);
         setInput('');
      }
   };

   return (
      <div>
         <h2>{item.length}</h2>
         <input
            onChange={onChangeHandler}
            onKeyDown={handleKeyPress}
            value={input}
         />
         <ul>
            {item.map((element, index) => (
               <ListItemComponent
                  element={element}
                  index={index}
                  key={`${index}${element}`}
               />
            ))}
         </ul>
         <button onClick={() => onClickHandler(input)}>Add new element</button>
      </div>
   );
};

export default ListComponent;
