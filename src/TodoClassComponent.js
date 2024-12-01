import React, { Component } from 'react';
import ListItemComponent from './ListItemComponent';
import ButtonComponent from './ButtonComponent';

class ListComponent extends Component {
   constructor(props) {
      super(props);

      // Ініціалізація стану
      this.state = {
         input: '', // Поле для введення тексту
         items: [
            // Масив задач
            { id: Date.now() + 1, todo: 'first todo', name: 'Olexandr' },
            { id: Date.now() + 2, todo: 'third todo', name: 'John' },
            { id: Date.now() + 3, todo: 'fourth todo', name: 'Sarah' },
         ],
      };
   }
   // Метод для додавання нового елемента
   onClickHandler = () => {
      const { input, items } = this.state; // Деструктуризація для отримання поточного значення input і items
      const newId = Date.now(); // Генеруємо унікальний ID
      const updatedElement = [...items, { id: newId, name: input }]; // Створюємо новий масив задач з доданою новою задачею
      this.setState({ items: updatedElement, input: '' }); // Оновлюємо стан, додаючи новий елемент і очищуючи input
   };

   // Метод для обробки зміни інпуту
   onChangeHandler = (e) => {
      this.setState({ input: e.target.value }); // Оновлюємо стан input з поточним значенням інпуту
   };

   // Метод для обробки натискання клавіші Enter
   handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         // Якщо натиснуто клавішу Enter
         const { input, items } = this.state;
         const newId = Date.now();
         const updatedElement = [...items, { id: newId, name: input }];
         this.setState({ items: updatedElement, input: '' });
      }
   };

   // Метод для видалення елемента
   handlerDelete = (id) => {
      const filteredItems = this.state.items.filter((item) => item.id !== id);
      this.setState({ items: filteredItems });
   };

   render() {
      return (
         <div>
            <h2>{this.state.items.length}</h2>
            <input
               onChange={this.onChangeHandler}
               onKeyDown={this.handleKeyPress}
               value={this.state.input}
            />
            <ul>
               {this.state.items.map((element, index) => (
                  <ListItemComponent
                     key={`${element.id}${index}`}
                     name={element.name}
                     id={element.id}
                     index={index + 1}
                  >
                     <ButtonComponent
                        text="Delete"
                        onClick={() => this.handlerDelete(element.id)}
                        type="button"
                     />
                  </ListItemComponent>
               ))}
            </ul>
            <button onClick={this.onClickHandler}>Add new element</button>
         </div>
      );
   }
}

export default ListComponent;
