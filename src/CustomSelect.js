const CustomSelect = ({ value, setValue }) => {
   const selecOptions = [
      { id: 1, value: 'option 1' },
      { id: 2, value: 'option 2' },
      { id: 3, value: 'option 3' },
      { id: 4, value: 'option 4' },
      { id: 5, value: 'option 5' },
   ];

   const hndleSelectChange = (e) => {
      console.log(e.target.value);
      const select = e.target.value;
      setValue((prevState) => ({ ...prevState, select }));
   };

   return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
         <label htmlFor="select">Select</label>
         <select
            onChange={hndleSelectChange}
            type="select"
            name="select"
            id="select"
         >
            {selecOptions.map((option) => (
               <option key={option.id}>{option.value}</option>
            ))}
         </select>
      </div>
   );
};

export default CustomSelect;
