const RadioButtons = ({ value, setValue }) => {
   const handleRadioChange = (event) => {
      const radio = event.target.name;
      setValue((prevState) => ({ ...prevState, radio }));
   };

   return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
         <label htmlFor="radio1">Radio 1</label>
         <input
            onChange={handleRadioChange}
            value={value.radio}
            checked={value.radio === 'radio1'}
            type="radio"
            name="radio1"
            id="radio1"
         />

         <label htmlFor="radio2">Radio 2</label>
         <input
            onChange={handleRadioChange}
            value={value.radio}
            checked={value.radio === 'radio2'}
            type="radio"
            name="radio2"
            id="radio2"
         />
      </div>
   );
};

export default RadioButtons;
