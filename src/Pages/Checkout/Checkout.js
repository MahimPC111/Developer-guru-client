import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { title } = course;
    return (
        <div>
            <h3 className='text-center p-3 mt-5 mx-auto rounded w-75 h-50' style={{ color: 'green', backgroundColor: 'lightgreen' }}>Welcome, You have successfully purchased {title} course package.</h3>
        </div>
    );
};

export default Checkout;