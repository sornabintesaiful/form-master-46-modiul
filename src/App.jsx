
import './App.css'
import RefForm from './components/refForm/RefForm'
import ReUseAbleForm from './components/reUseAbleForm/ReUseAbleForm'
import HookForm from './hooks/HookForm'
// import StateFullForm from './components/stateFullForm/StateFullForm'
// import SimpleForm from './simpleForm/SimpleForm'

function App() {

 const handleSineUPSubmit = data => {
  //  e.preventDefault();
   console.log('sign up data', data)
 };
  
  const handleUpdateProfile = data => {
    // e.preventDefault();
    console.log('Update profile data--',data)
  };

  return (
    <>
     
      <h1>Vite + React</h1>
      <ReUseAbleForm handleSubmit={handleSineUPSubmit} formTitle={'Sign up'}>
        <div><h2>sign up</h2>
        <p>Please sign up Right Now</p></div>
      </ReUseAbleForm>
      <ReUseAbleForm
        handleSubmit={handleUpdateProfile}
        formTitle={'Profile Update'}
        submitBtnText={'Update'}>
        <div><h2>Update profile</h2>
        <p>Alwaye keep your profile updated</p></div>
        </ReUseAbleForm>
      {/* <HookForm></HookForm> */}
      {/* <RefForm></RefForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <SimpleForm></SimpleForm> */}
      
    </>
  )
}

export default App
