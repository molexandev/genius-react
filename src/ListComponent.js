import { useState } from 'react';
import ListItemComponent from './ListItemComponent';
import ButtonComponent from './ButtonComponent';

const ListComponent = (props) => {
   const initialValues = [
      { id: Date.now() + 1, todo: 'first todo', name: 'Olexandr' },
      { id: Date.now() + 2, todo: 'third todo', name: 'John' },
      { id: Date.now() + 3, todo: 'fouth todo', name: 'Sarah' },
   ];

   const [input, setInput] = useState('');
   const [items, setItems] = useState(initialValues);

   const onClickHandler = (input) => {
      const newId = Date.now(); // Унікальний id
      const updatedElement = [...items, { id: newId, name: input }];
      setItems(updatedElement);
      setInput('');
   };

   const onChangeHandler = (e) => {
      const value = e.target.value;
      setInput(value);
   };

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         const newId = Date.now(); // Унікальний id
         const updatedElement = [...items, { id: newId, name: input }];
         setItems(updatedElement);
         setInput('');
      }
   };

   const handlerDelete = (id) => {
      const filteredItems = items.filter((item) => item.id !== id);
      setItems(filteredItems);
   };

   return (
      <div>
         <h2>{items.length}</h2>
         <input
            onChange={onChangeHandler}
            onKeyDown={handleKeyPress}
            value={input}
         />
         <ul>
            {items.map((element, index) => (
               <ListItemComponent
                  key={`${element.id}${index}`}
                  name={element.name}
                  id={element.id}
                  index={index + 1}
               >
                  <ButtonComponent
                     text="Delete"
                     onClick={() => handlerDelete(element.id)}
                     type="button"
                  />
               </ListItemComponent>
            ))}
         </ul>
         <button onClick={() => onClickHandler(input)}>Add new element</button>
      </div>
   );
};

export default ListComponent;
