import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const { signInUser, signInWithGoogle, signInWithGithub, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(() => {
                form.reset();
                navigate(from, { replace: true });
                toast.success('Successfully logged in!');
                setLoading(false);
            })
            .catch(e => toast.error(e.message))

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(() => {
                toast.success('Successfully logged in!');
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch(e => toast.error(e.message))
    }

    const handleGithubSignIn = () => {
        signInWithGithub(githubProvider)
            .then(() => {
                toast.success('Successfully logged in!');
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch(e => toast.error(e.message))
    }

    return (
        <div className='m-auto w-sm-25 w-50 mt-5'>
            <h4 className='text-center fw-bold'>Log In with:</h4>
            <div className='d-flex justify-content-center'>
                <ButtonGroup vertical>
                    <Form onSubmit={handleSubmit} className='mt-5 mx-auto p-3 bg-light rounded'>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Type password" required />
                        </Form.Group>

                        <div className='d-flex justify-content-center'>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                    <Button onClick={handleGoogleSignIn} className='mt-2 text-black' variant="outline-warning">Google</Button>
                    <Button onClick={handleGithubSignIn} className='mt-2 text-black' variant="outline-warning">Github</Button>
                </ButtonGroup>
            </div>
            <p className="d-block mt-3 text-center text-black"><small>
                Don't have an account? Please <Link to='/register' className=' text-warning'>Register</Link>
            </small></p>
        </div>
    );
};
// d-flex justify-content-center 
export default Login;