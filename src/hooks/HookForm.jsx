import useInputState from "./useInputState";


const HookForm = () => {
  // const [name, handleNameChange] = useInputState('Bulbul');
  const emailState = useInputState('rojoni@sojoni.go')

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form data', emailState.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name}
          onChange={handleNameChange}
          type="text" name="name" /> <br /> */}
        <input {...emailState} type="email" name="email" /> <br />
        <input type="password" name="password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;