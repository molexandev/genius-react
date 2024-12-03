import React from 'react';

const InputData = ({ value }) => {
   return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
         <div>Firs name: {value.name}</div>
         <div>Email: {value.email}</div>
         <div>Checkbox: {value.checkbox.toString()}</div>
         <div>Select: {value.select}</div>
      </div>
   );
};

export default InputData;
