import { Button } from 'react-bootstrap';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import img1 from '../../assets/boy.png'
import img2 from '../../assets/girl.png'

const Home = () => {

    return (
        <div>
            <div className='d-md-flex justify-content-between'>
                <div className='d-flex justify-content-center'>
                    <img className='w-75 w-sm-100' src={img1} alt="" />
                </div>
                <div className='w-50 mx-auto titleDiv'>
                    <h1 className='text-center'>Hi developers!</h1>
                    <h2 className='text-center'>Welcome to Developer Guru</h2>
                    <div className='d-flex justify-content-center mt-5'>
                        <Link to='/courses'><Button variant="success">Get Started <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <img className='w-75 w-sm-100' src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;