import { useState } from 'react';
import React from 'react';
import InputData from './InputData';
import CheckBox from './CheckBox';
import TextInputs from './TextInputs';
import RadioButtons from './RadioButtons';
import CustomSelect from './CustomSelect';

const ControledForms = () => {
   const [value, setValue] = useState({
      name: '',
      email: '',
      checkbox: false,
      radio: 'radio1',
      select: 'option 1',
   });

   const handleSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <div>
         <form
            onSubmit={handleSubmit}
            style={{
               display: 'flex',
               flexDirection: 'column',
               rowGap: '30px',
               marginBottom: '50px',
            }}
         >
            <TextInputs value={value} setValue={setValue} />
            <CheckBox value={value} setValue={setValue} />
            <RadioButtons value={value} setValue={setValue} />
            <CustomSelect value={value} setValue={setValue} />

            <button type="submit">Submit form</button>
         </form>
         <InputData value={value} />
      </div>
   );
};

export default ControledForms;
