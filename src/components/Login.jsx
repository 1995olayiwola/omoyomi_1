import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Form from './Form';
import {useHistory} from  'react-router-dom';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Parse from 'parse';
import Navbar from './Navbar';
import Loading from './Loading';

const Login = () => {
  const [loading,setLoading] = React.useState(false)
  const history = useHistory()
  const [formValues,setFormValues] = React.useState({
    email:"",password:''
  })
  const handleChange = (e)=>{
    setFormValues(()=>{
      return {
        ...formValues,[e.target.name]:e.target.value
      }
    })
  }
  const handleSubmit= async(e)=>{
e.preventDefault();
setFormValues(async()=>{
  console.log(formValues)
  
 
try {
  
  const user = await Parse.User.logIn(formValues.email, formValues.password);
  setLoading(true);
  alert('Login successful, you are wellcome')
  setLoading(false)
      history.push('/dashboard');
  // Hooray! Let them use the app now.
} catch (error) {
  // Show the error message somewhere and let the user try again.
  alert("Error: " + error.code + " " + error.message);
}
  
})
  }
  return (
    
    <div>

<Navbar/>
    <Form type="text" placeholder="Enter your email" value={formValues.email} name="email" label="Email Address" handleChange={handleChange}/>
  <Form type="text" placeholder="Enter your password" value={formValues.password} name="password" label="Password" handleChange={handleChange}/>
{loading && <Loading/>}
  <Button variant="primary outlined" onClick={handleSubmit}>Login </Button>
  <Footer/>
    </div>

  )
}

export default Login