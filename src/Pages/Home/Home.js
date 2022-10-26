import { Button } from 'react-bootstrap';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import img1 from '../../assets/boy.png'
import img2 from '../../assets/girl.png'

const Home = () => {

    return (
        <div className='home-div'>
            <div className='d-flex justify-content-between'>
                <img className='w-25' src={img1} alt="" />
                <div className='w-50 mx-auto titleDiv'>
                    <h1 className='text-center'>Hi developers!</h1>
                    <h2 className='text-center'>Welcome to Learn JavaScript</h2>
                    <div className='d-flex justify-content-center mt-5'>
                        <Link to='/courses'><Button variant="success">Get Started <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                    </div>
                </div>
                <img className='w-25' src={img2} alt="" />
            </div>
        </div>
    );
};

export default Home;