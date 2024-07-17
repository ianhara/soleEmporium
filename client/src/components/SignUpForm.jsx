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
      Auth.login(result.data.token);
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
      if(data) {
        Auth.login(data.createuser.token);
      }

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
<Form.Group className='mb-3'>
  <Form.Label htmlFor='FirstName'>First Name</Form.Label>
  <Form.Control
    type='text'
    placeholder='first name'
    name='firstName'
    onChange={handleInputChange}
    value={userFormData.firstName || ''}
    required
  />
  <Form.Control.Feedback type='invalid'>firstName is required!</Form.Control.Feedback>
</Form.Group>

<Form.Group className='mb-3'>
  <Form.Label htmlFor='LastName'>Last Name</Form.Label>
  <Form.Control
    type='text'
    placeholder='last name'
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
    placeholder='email address'
    name='email'
    onChange={handleInputChange}
    value={userFormData.email}
    required
  />
  
  <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
</Form.Group>

<Form.Group className='mb-3'>
  <Form.Label htmlFor='Password'>Password</Form.Label>
  <Form.Control
    type='password'
    placeholder='password'
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
  variant='danger'>
  Submit
</Button>
</Form> 
    </>
  );
};

export default SignupForm;


