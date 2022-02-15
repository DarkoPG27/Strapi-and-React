import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/esm/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function About() {
    const { loading, error, data } = useFetch('http://localhost:1337/about')

    if (loading) return <Spinner animation="border" role="status"></Spinner>
    if (error) return <p className='messages'>Error fetching data :(</p>
    console.log(data.about_content)
    return (


        <div className='col-12'>
            <div className='about-header'><h1>About Us</h1></div>
            <Container>
                <Row>
                    <div className='col-2'></div>
                    <div className='about-paper col-8'>
                        <h2>Title</h2>
                        <p>{data.about_content}</p>
                    </div>
                    <div className='col-2'></div>
                </Row>
            </Container >
        </div>


    )
}
