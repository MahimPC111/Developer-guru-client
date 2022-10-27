import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    const { title, price, body, duration, img } = course;
    return (
        <Card className='mx-auto my-5' style={{ width: '500px' }}>
            <Card.Img variant="top" src={img} style={{ height: '200px' }} alt="" />
            <Card.Body className='p-2'>
                <Card.Title className='fs-3 text-center'>{title}</Card.Title>
                <Card.Text className='m-0'>
                    <span className='my-2'>{body}</span>
                    <span className='d-flex justify-content-between my-3'>
                        <span className='m-0 fw-semibold d-block'>Course price: {price}</span>
                        <span className='m-0 fw-semibold d-block'>Course duration: {duration}</span>
                    </span>
                </Card.Text>
                <Link><Button variant="outline-primary" className='w-100 mt-2'>Buy now!!</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Course;