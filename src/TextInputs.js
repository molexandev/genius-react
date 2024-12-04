const TextInputs = ({ value, setValue }) => {
   const hndleNameChange = (event) => {
      const name = event.target.value;
      console.log(name);
      setValue((prevState) => ({ ...prevState, name }));
   };

   const hndleEmailChange = (event) => {
      const email = event.target.value;
      setValue((prevState) => ({ ...prevState, email }));
   };

   return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
         <label htmlFor="firstName">Firs name</label>
         <input
            onChange={hndleNameChange}
            value={value.name}
            type="text"
            name="firstName"
            id="firstName"
         />

         <label htmlFor="email">Email</label>
         <input
            onChange={hndleEmailChange}
            value={value.email}
            type="email"
            name="email"
            id="email"
         />
      </div>
   );
};

export default TextInputs;
