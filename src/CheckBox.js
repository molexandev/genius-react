import React from 'react';

const CheckBox = ({ value, setValue }) => {
   const hndleCheckboxChange = (event) => {
      const checkbox = event.target.checked;
      setValue((prevState) => ({ ...prevState, checkbox }));
   };
   return (
      <div>
         <label htmlFor="checkbox">checkbox</label>
         <input
            onChange={hndleCheckboxChange}
            value={value.checkbox}
            checked={value.checkbox}
            type="checkbox"
            name="checkbox"
            id="checkbox"
         />
      </div>
   );
};

export default CheckBox;
