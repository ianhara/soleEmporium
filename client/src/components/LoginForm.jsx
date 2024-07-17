import { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';


const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [ sendLogin, result ] = useMutation(LOGIN_USER)
  if (result.error) {
    console.log(JSON.stringify(result.error))
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };


  useEffect(() => {
    if (result?.data) {
      Auth.login(result.data.loginUser)
    }

  }, [result?.data])

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log("form", form.email.value, form.password.value)
    await sendLogin({
      variables: { email: form.email.value, password: form.password.value }
    })
    setUserFormData({ email: '', password: '' })
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit} >
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant="danger">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
