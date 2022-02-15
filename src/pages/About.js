import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/esm/Spinner';

export default function About() {
    const { loading, error, data } = useFetch('http://localhost:1337/about')

    if (loading) return <Spinner animation="border" role="status"></Spinner>
    if (error) return <p className='messages'>Error fetching data :(</p>
    console.log(data.about_content)
    return (

        <div className='single_page'>
            <h1>About page</h1>
            <p>{data.about_content}</p>
        </div>
    )
}
