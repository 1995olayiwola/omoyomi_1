import React from 'react';
import Form from 'react-bootstrap/Form';

const TextBox = (props) => {
    
  return (
    <div>
 <Form onSubmit={props.handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} placeholder={props.placeholder} onChange={props.handleChange} value={props.value} name={props.name}/>
      </Form.Group>
      
    </Form>


    </div>
  )
}

export default TextBox;