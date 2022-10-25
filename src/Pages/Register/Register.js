import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate('/');
            })
            .catch(e => setError(e.message))

        console.log(email, password)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Type password" required />
            </Form.Group>

            <Form.Text className="d-block mb-3">
                Already have an account? <Link to='/login'>LogIn</Link>
            </Form.Text>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-danger d-block">
                {
                    error
                }
            </Form.Text>
        </Form>
    );
};

export default Register;