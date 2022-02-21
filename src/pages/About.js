import React from 'react';
import useFetch from '../hooks/useFetch';
import Spinner from 'react-bootstrap/esm/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

export default function About() {
    const { loading, error, data } = useFetch('http://localhost:1337/about')

    if (loading) return <div className='spinner'> <Spinner animation="grow" variant="secondary" role="status"></Spinner></div>
    if (error) return <p className='messages'>Error fetching data :(</p>
    console.log(data.about_content)
    return (

        <div className='about-page col-12 ' >
            <div className='about-header'><h1>About Us</h1></div>
            <Container>
                <Row>
                    <Col className='col-2 ' >
                        <img className='image-left' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzZGhBntOhRgkol_FdruXML_tX07XjyLcaw&usqp=CAU" alt="" />
                    </Col>
                    <Col className='about-paper col-8'>
                        <h2>We created Get Your Pet in response to a number: 2.5 million.</h2>
                        <p>{data.about_content}</p>
                    </Col>
                    <Col className='col-2'>
                        <img className='image-right' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzZGhBntOhRgkol_FdruXML_tX07XjyLcaw&usqp=CAU" alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col className='team col-12'>
                        <h2>Our Team</h2>
                    </Col>
                    <Col className='team col-12 '>
                        <p>Dedicated to getting pets <br></br>
                            from one good home to another…</p>
                    </Col>
                    <div className="col-2"></div>
                    <Col className=' team-details'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzZGhBntOhRgkol_FdruXML_tX07XjyLcaw&usqp=CAU" alt="" />
                        <p className='team-member-name'> Darko Brnovic </p>
                        <p className='team-member-position'> Co-Founder </p>
                    </Col>

                    <Col className=' team-details'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzZGhBntOhRgkol_FdruXML_tX07XjyLcaw&usqp=CAU" alt="" />
                        <p className='team-member-name'> Darko Brnovic </p>
                        <p className='team-member-position'> Co-Founder </p>
                    </Col>
                    <Col className='team-details'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzZGhBntOhRgkol_FdruXML_tX07XjyLcaw&usqp=CAU" alt="" />
                        <p className='team-member-name'> Darko Brnovic </p>
                        <p className='team-member-position'> Co-Founder </p>
                    </Col>
                    <div className="col-2"></div>
                </Row>

                <Col>Footer</Col>
            </Container >
        </div >
    )
}
