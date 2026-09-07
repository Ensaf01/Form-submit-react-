
import './App.css'
import ReUsableForm from './components/ReUseableForm/ReUsableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'
// import SimpleForm from './components/Simpleform/SimpleForm'

function App() {
  const handleSignSubmit = e => {
    e.preventDefault();
    const data ={
      name: e.target.names.value,
      email :e.target.email.value,
      pass : e.target.email.value
    }

    console.log("sign up data",data);
  }

  const handleUpdateProfile=e =>{
    e.preventDefault();
    // data is object and simple way te form er data collect korechi,akhne UseRef,stateFull,custom hook etc use kore data access korte pari
    const data ={
      name: e.target.names.value,
      email :e.target.email.value,
      pass : e.target.email.value
    }

    console.log("profile update data",data);
  }

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReUsableForm 
      formTitle={'Sign Up'}
      handleSubmit={handleSignSubmit} 
      >
        <h2>Sign Up</h2>
        <p>please sign up here</p>
      </ReUsableForm>

      <ReUsableForm 
      formTitle={'Profile Update'} 
      submitButtonText={'Update'} 
      handleSubmit={handleUpdateProfile} 
      >
        <h2>Update profile</h2>
        <p>please always keep your profile update</p>
      </ReUsableForm>
    </>
  )
}

export default App
