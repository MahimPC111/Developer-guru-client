import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                navigate('/');
                toast.success('Successfully logged in!');
            })
            .catch(e => { setError(e.message) })

    }

    return (
        <Form onSubmit={handleSubmit} className='w-75 mt-5 mx-auto p-3 bg-light rounded'>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Type password" required />
            </Form.Group>

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

export default Login;