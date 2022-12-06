import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import PDF from '../Others/PDF/PDF';
import './CourseDetails.css'


const Course = () => {
    const course = useLoaderData();
    const { id, title, price, body, duration, img } = course;


    return (
        <div className='py-5 px-2'>
            <h1 className='text-center bg-secondary rounded p-1 w-50 mx-auto'>{title} course package</h1>
            <PDF></PDF>
            <Card className='mx-auto courseCard'>
                <Card.Title className='fs-3 m-2'>{title}</Card.Title>
                <Card.Img variant="top" src={img} style={{ height: '300px' }} alt="" />
                <Card.Body className='p-2'>
                    <Card.Text className='m-0'>
                        <span className='my-2'>{body}</span>
                        <span className='d-flex justify-content-between my-3'>
                            <span className='m-0 fw-semibold d-block'>Course price: {price}</span>
                            <span className='m-0 fw-semibold d-block'>Course duration: {duration}</span>
                        </span>
                    </Card.Text>
                    <Link to={`/checkout/${id}`}><Button variant="outline-primary" className='w-100 mt-2'>Get premium access</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;