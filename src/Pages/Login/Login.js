import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully logged in!');
            })
            .catch(e => toast.error(e.message))
    }

    const handleGithubSignIn = () => {
        signInWithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully logged in!');
            })
            .catch(e => toast.error(e.message))
    }

    return (
        <div className='m-auto w-sm-25 w-50 mt-5'>
            <h4 className='text-center'>Log In with:</h4>
            <div className='d-flex justify-content-center'>
                <ButtonGroup vertical>
                    <Button className='mt-2' variant="outline-success"><Link to='/emailpassword' className='text-decoration-none text-black'>Email and Password</Link></Button>
                    <Button onClick={handleGoogleSignIn} className='mt-2 text-black' variant="outline-success">Google</Button>
                    <Button onClick={handleGithubSignIn} className='mt-2 text-black' variant="outline-success">Github</Button>
                </ButtonGroup>
            </div>
            <p className="d-block mt-3 text-center"><small>
                Don't have an account? Please <Link to='/register'>Register</Link>
            </small></p>
        </div>
    );
};
// d-flex justify-content-center 
export default Login;