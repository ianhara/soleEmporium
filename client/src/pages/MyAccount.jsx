// // MyAccount.jsx
// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_USER } from '../utils/queries'; 
// import { Container, Row, Col } from 'react-bootstrap';

// const MyAccount = () => {
//   const { loading, error, data } = useQuery(GET_USER);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const { user } = data;

//   return (
//     <Container fluid="md" className="myAccountPage">
//       <Row className="justify-content-md-center">
//         <Col md="auto">
//           <div className="text-center">
//             <img className="accountLogo" src="/images/logo.png" alt="Account Logo" />
//             <h1>My Account</h1>
//             <p>Name: {user.firstName} {user.lastName}</p>
//             <p>Email: {user.email}</p>
//             <div>
//               <h2>Address</h2>
//               <p>Street: {user.address.street}</p>
//               <p>City: {user.address.city}</p>
//               <p>State: {user.address.state}</p>
//               <p>Zip: {user.address.zip}</p>
//               <p>Country: {user.address.country}</p>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MyAccount;


import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from '../utils/queries'; 
import {UPDATE_USER} from '../utils/mutations';
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap';

const MyAccount = () => {
  const { loading, error, data } = useQuery(GET_USER);
  const [updateUser, { loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_USER);
  const [formData, setFormData] = useState({
    userId: '', // Include userId in the state
    firstName: '',
    lastName: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    }
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    if (data && data.user) {
      setFormData({
        userId: data.user._id, // Set userId when data is fetched
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        address: {
          street: data.user.address.street,
          city: data.user.address.city,
          state: data.user.address.state,
          zip: data.user.address.zip,
          country: data.user.address.country
        }
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData); 
    try {
      await updateUser({
        variables: { updateInput: formData }
      });
      setShowSuccess(true);
      setShowModal(false);
      setTimeout(() => setShowSuccess(false), 3000); 
    } catch (e) {
      console.error('Error during mutation:', e); 
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container fluid="md" className="myAccountPage">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="text-center">
            <img className="accountLogo" src="/images/logo.png" alt="Account Logo" />
            <h1>My Account</h1>
            {data && data.user ? (
              <>
                <p>Name: {data.user.firstName} {data.user.lastName}</p>
                <p>Email: {data.user.email}</p>
                <div>
                  <h2>Address</h2>
                  <p>Street: {data.user.address.street}</p>
                  <p>City: {data.user.address.city}</p>
                  <p>State: {data.user.address.state}</p>
                  <p>Zip: {data.user.address.zip}</p>
                  <p>Country: {data.user.address.country}</p>
                </div>
                <Button variant="link" onClick={handleShowModal}>Edit User Information</Button>
              </>
            ) : (
              <p>No user data found.</p>
            )}
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <h2>Address</h2>

            <Form.Group controlId="formStreet">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                name="address.zip"
                value={formData.address.zip}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="address.country"
                value={formData.address.country}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={mutationLoading}>
              {mutationLoading ? 'Saving...' : 'Save Changes'}
            </Button>
          </Form>
          {mutationError && <Alert variant="danger">Error: {mutationError.message}</Alert>}
        </Modal.Body>
      </Modal>

      {showSuccess && <Alert variant="success">Profile updated successfully!</Alert>}
    </Container>
  );
};

export default MyAccount;
