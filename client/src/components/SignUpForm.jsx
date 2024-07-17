import { useState,useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ firstName: '',lastName: '', email: '', password: '' });
  // set state for form validation
  const [validated, setValidated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
 const [sign, result] = useMutation(CREATE_USER);


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };
  


  useEffect(() => {
    if (result.data) {
      // Update to show user created message instead of logging in
      setUserCreated(true);
    }
  }, [result.data])

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setValidated(true);

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
      return;
    }

    try {
      const { data } = await sign({
          variables: {
              input: {
                  firstName: userFormData.firstName,
                  lastName: userFormData.lastName,
                  email: userFormData.email,
                  password: userFormData.password,
              }
          }
      });
 // Reset form fields after successful submission
 setUserFormData({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
});
      

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
 <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
{/* show alert if server response is bad */}
<Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
  Something went wrong with your signup!
</Alert>

{/* Show success message when user is created */}
<Alert dismissible onClose={() => setUserCreated(false)} show={userCreated} variant='success'>
          User created You may now sign in!
        </Alert>

<Form.Group className='mb-3'>
  <Form.Label htmlFor='FirstName'>FirstName</Form.Label>
  <Form.Control
    type='text'
    placeholder='Your firstname'
    name='firstName'
    onChange={handleInputChange}
    value={userFormData.firstName || ''}
    required
  />
  <Form.Control.Feedback type='invalid'>firstName is required!</Form.Control.Feedback>
</Form.Group>

<Form.Group className='mb-3'>
  <Form.Label htmlFor='LastName'>LastName</Form.Label>
  <Form.Control
    type='text'
    placeholder='Your LastName'
    name='lastName'
    onChange={handleInputChange}
    value={userFormData.lastName}
    required
  />
  <Form.Control.Feedback type='invalid'>lastName is required!</Form.Control.Feedback>
</Form.Group>

<Form.Group className='mb-3'>
  <Form.Label htmlFor='email'>Email</Form.Label>
  <Form.Control
    type='text'
    placeholder='Your email address'
    name='email'
    onChange={handleInputChange}
    value={userFormData.email}
    required
  />
  
  <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
</Form.Group>

<Form.Group className='mb-3'>
  <Form.Label htmlFor='Password'>password</Form.Label>
  <Form.Control
    type='password'
    placeholder='Your password'
    name='password'
    onChange={handleInputChange}
    value={userFormData.password}
    required
  />
  
  <Form.Control.Feedback type='invalid'>password is required!</Form.Control.Feedback>
</Form.Group>




<Button
  disabled={!(userFormData.firstName && userFormData.lastName && userFormData.email && userFormData.password)}
  type='submit'
  variant='success'>
  Submit
</Button>
</Form> 
    </>
  );
};

export default SignupForm;


