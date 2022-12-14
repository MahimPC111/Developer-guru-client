import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyUserEmail } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(() => {
                form.reset();
                navigate('/');
                handleUserProfile(name, photoURL);
                verifyUserEmail();
                verificationToast();
            })
            .catch(e => toast.error(e.message))
    }

    const verificationToast = () => {
        toast.success('A verification link has sent to your email. Please check and verify!',
            { duration: 3000 });
    }

    const handleUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => toast.error(e.message))
    }

    return (
        <Form className='w-sm-50 w-75 mt-5 mx-auto p-3 bg-light rounded' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter your photoURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Type password" required />
            </Form.Group>

            <Form.Text className="d-block mb-3">
                <small>Already have an account? <Link to='/login'>LogIn</Link></small>
            </Form.Text>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Register;