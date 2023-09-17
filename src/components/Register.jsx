import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';
import './Css/Register.css';
import Footer from './Footer';
import Form from './Form';
import Button from 'react-bootstrap/Button';
import Parse from 'parse';
import {useHistory} from 'react-router-dom';
import Loading from './Loading';

const Register = () => {
  const history = useHistory()
  const [formValues,setFormValues] = React.useState({
    email:"",number:'',username:'',password:'',upline:''
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
  const user = new Parse.User();
  user.set("username", formValues.username);
user.set("password", formValues.password);
user.set("email", formValues.email);
user.set("phone", formValues.number);
user.set("upline", formValues.upline);
 
try {
  
      await user.signUp();
      setLoading(true);
      alert("registration successful!");
      setLoading(false);
      history.push('/login');
  // Hooray! Let them use the app now.
} catch (error) {
  // Show the error message somewhere and let the user try again.
  alert("Error: " + error.code + " " + error.message);
}
  
})
  }
  const [loading,setLoading] = React.useState(false);
  
  return (
    <div className='register_container'>
      <Navbar/>
      
      <Form type="text" placeholder="Enter your Username" value={formValues.username} name="username" label="Username" handleChange={handleChange}/>
    <Form type="text" placeholder="Enter your email" value={formValues.email} name="email" label="Email Address" handleChange={handleChange}/>
    <Form type="number" placeholder="Enter your phone number" value={formValues.number} name="number" label="Phone Number" handleChange={handleChange}/>
  <Form type="text" placeholder="Enter your password" value={formValues.password} name="password" label="Password" handleChange={handleChange}/>
  <Form type="text" placeholder="Enter your upline username" value={formValues.upline} name="upline" label="Upline Username" handleChange={handleChange}/>
  {loading && <Loading/>}
  <Button variant="primary outlined" onClick={handleSubmit}>Register </Button>
 
  <Footer/>
  </div>
  )
}

export default Register