import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/esm/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

export default function Contact() {
    const { loading, error, data } = useFetch('http://localhost:1337/contact')

    if (loading) return <div className='spinner'> <Spinner animation="grow" variant="secondary" role="status"></Spinner></div>
    if (error) return <p className='messages'>Error fetching data :(</p>
    console.log(data.contact_image.url)
    return (

        <div className='about-page col-12 ' >
            <div className='about-header'><h1>Contact Us</h1></div>
            <Container>
                <Row>
                    <Col className='col-2 '></Col>

                    <Col className='about-paper col-8'>
                        <img src={`http://localhost:1337${data.contact_image.url}`}
                            alt="contact_image"
                            style={{
                                width: "100%",
                                padding: "40px 40px 0px 40px"
                            }} />
                        <h2>{data.contact_title}</h2>
                        <p>{data.contact_content}: <Link>  {data.contact_mail}</Link></p>
                    </Col>
                </Row>
                <Row>
                    <Col> Footer</Col></Row>
            </Container >
        </div >
    )
}
