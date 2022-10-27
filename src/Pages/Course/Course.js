import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, title, price, body, duration, img } = course;
    return (
        <Card>
            <Card.Img variant="top" src={img} height='200' alt="" />
            <Card.Body className='p-2'>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='m-0'>
                    <span><small>
                        {
                            body.length > 50 ?
                                body.slice(0, 50) + '...'
                                :
                                body
                        }
                    </small></span>
                    <span className='m-0 fw-semibold d-block'>Course price: {price}</span>
                    <span className='m-0 fw-semibold d-block'>Course duration: {duration}</span>
                </Card.Text>
                <Link to={`/courses/${id}`}><Button variant="outline-primary" className='w-100 mt-2'>View details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Course;