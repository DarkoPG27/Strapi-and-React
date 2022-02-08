import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Contact() {
    const { loading, error, data } = useFetch('http://localhost:1337/contact')

    if (loading) return <p className='messages'>Loading...</p>
    if (error) return <p className='messages'>Error fetching data :(</p>
    console.log(data.contact_content)
    return (

        <div className='single_page'>
            <h1>Contact Page</h1>
            <p>{data.contact_content}</p>
        </div>
    )
}
