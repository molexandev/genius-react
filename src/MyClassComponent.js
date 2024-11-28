import { Component } from 'react';

class MyClassComponent extends Component {
   constructor(props) {
      super(props);
      this.state = { name: 'Olexandr' };
   }

   render() {
      return (
         <div>
            <h1>Hello {this.state.name}</h1>
         </div>
      );
   }
}

export default MyClassComponent;
