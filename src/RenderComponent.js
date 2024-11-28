import React from 'react';
import TodosList from './TodosList';
import GrandChildComponent from './GrandChildComponent';

const RenderComponent = () => {
   //! 1. Рендер за умовою.

   // const firstRenderValue = false;
   // const secondRenderValue = true;
   // const thirdRenderValue = [];
   // if (secondRenderValue) {
   //    return (
   //       <div>
   //          <p>TRUE</p>
   //       </div>
   //    );
   // }
   // return (
   //    <div>
   //       {firstRenderValue && <p>I am firstRenderValue</p>}
   //       {secondRenderValue && <p>I am secondRenderValue</p>}
   //       {/* {!!thirdRenderValue && <p>I am thirdRenderValue</p>} */}
   //       {thirdRenderValue.length ? <p>I am thirdRenderValue</p> : <p>False</p>}
   //    </div>
   // );

   //! 2. Рендер колекцій.

   const todoes = [
      { id: 1, todo: 'first todo', name: 'Olexandr' },
      { id: 2, todo: 'second todo', name: 'Alex' },
      { id: 3, todo: 'third todo', name: 'John' },
      { id: 4, todo: 'fouth todo', name: 'Sarah' },
   ];

   const myName = {
      name: 'Olexandr',
   };

   const myNameIsArray = ['Olexandr'];

   const myFunctionName = () => {
      return 'Olexandr';
   };

   return (
      <div>
         {/* //? Як робити не треба: */}
         {/* <TodosList todo={todoes[0].todo} />
         <TodosList todo={todoes[1].todo} />
         <TodosList todo={todoes[2].todo} />
         <TodosList todo={todoes[3].todo} /> */}
         {/* {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <h4 key={item}>{item}</h4>
         ))} */}

         {/* {todoes.map((item) => {
            console.log(item);
            return (
               <TodosList
                  key={item.id}
                  todo={item.todo}
                  id={item.id}
                  name={item.name}
               />
            );
         })} */}
         <GrandChildComponent
            myName={myName}
            myNameIsArray={myNameIsArray}
            myFunctionName={myFunctionName}
         />
      </div>
   );
};

export default RenderComponent;
