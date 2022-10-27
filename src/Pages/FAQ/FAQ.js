import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FAQ = () => {
    const faqs = useLoaderData();
    return (
        <div className='p-5'>
            {
                faqs.map((faq, idx) => <div key={idx} className="my-5 p-5 rounded bg-leanear h-25">
                    <h3 className='text-warning'><b>Question:</b> {faq.question}</h3>
                    <p className='text-warning'><b>Answer:</b> {faq.answer}</p>
                </div>)
            }
        </div>
    );
};

export default FAQ;