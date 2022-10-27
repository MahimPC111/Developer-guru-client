import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Courses.css'
import { Button } from 'react-bootstrap';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container fluid="md">
            <Row>
                <Col md='2'>
                    <h4 className='my-5 text-black-50 text-center'>These are our popular courses you may like!</h4>
                    {
                        courses.map(course => <Link key={course.id} to={`/courses/${course.id}`} className='text-info text-decoration-none'><Button className='d-block w-100 my-2 bg-dark'>{course.title}</Button></Link>)
                    }
                </Col>
                <Col md='10' className='course-section p-5'>
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Col>
            </Row>
        </Container>



    );
};

export default Courses;