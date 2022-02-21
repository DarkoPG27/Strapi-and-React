import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPaw } from 'react-icons/fa';

export default function PetDetails() {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:1337/pets/' + id);
    console.log(data)
    if (loading) return <div className='spinner'> <Spinner animation="grow" variant="secondary" role="status"></Spinner></div>
    if (error) return <p className='messages'>Error fetching data :(</p>

    return (
        <div className='pet-details'>
            <Container>
                <Row>
                    <Col md={6}><h1 className='pet-name'><FaPaw /><span>{data.name}</span><FaPaw /></h1></Col>
                </Row>
                <Row>
                    <Col md={6}> {
                        data.galeryImages.length > 1 ?
                            (<Carousel className="d-block w-100 " >

                                {data.galeryImages.map(i => {
                                    return <Carousel.Item key={i.hash} className="item" interval={3000}>
                                        <img
                                            className="d-block w-100"
                                            src={`http://localhost:1337${i.url}`}
                                            alt={i.name}
                                        />
                                    </Carousel.Item>
                                })}
                            </Carousel>)
                            :
                            (<Image fluid variant="top"
                                src={data.image != null ?
                                    `http://localhost:1337${data.image.url}`
                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzZGhBntOhRgkol_FdruXML_tX07XjyLcaw&usqp=CAU'
                                }
                            />)
                    }</Col>
                    <Col md={6}>
                        <h3>Pet details:</h3>
                        <h5>City:</h5>
                        <h5>Age:</h5>
                        <h5>Size:</h5>
                        <h5>Breeds:</h5>
                        <h5>Sex:</h5>

                    </Col>
                    <br></br>
                    <Col md={12}><h3>More Details:</h3> {data.description}</Col>
                </Row>
                <Col md><Link className='card-category' to={`/category/${data.category.id}`}>
                    <button>{data.category.name}</button> </Link></Col>

            </Container>
        </div >
    )
}
