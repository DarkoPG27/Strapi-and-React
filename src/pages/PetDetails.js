import React, { useContext } from 'react';
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
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { AuthContext } from "../contexts/auth";
import { UserContext } from "../contexts/userContext";


export default function PetDetails() {
    const { authTokens, setTokens } = useContext(AuthContext);
    const { user } = useContext(UserContext);
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:1337/pets/' + id);
    console.log(data)
    if (loading) return <div className='spinner'> <Spinner animation="grow" variant="secondary" role="status"></Spinner></div>
    if (error) return <p className='messages'>Error fetching data :(</p>

    return (

        <Container className='pet-details'>
            <Row>
                <Col ><h1 className='pet-name'><FaPaw /><span>{data.name}</span><FaPaw /></h1></Col>
            </Row>
            <Row >
                <Col md={6}>
                    <Col > {
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
                    }
                        <Col className='pets-button'>
                            <Link to="/pets" ><Button className='left-btn'><FaPaw /> <br></br> Go to Pets</Button></Link>
                            <Link to={`/category/${data.category.id}`}>
                                <Button className='right-btn'><FaPaw /> <br></br>Go to Category</Button></Link>
                        </Col>

                    </Col>
                    <Row>
                        <Col ><hr></hr>
                            <h3>Pet details:</h3>
                            <h5>City: {data.city}</h5>
                            <h5>Age: {data.age} y</h5>
                            <h5>Size: {data.size}</h5>
                            <h5>Breeds: {data.breeds}</h5>
                            <h5>Sex: {data.sex}</h5>
                        </Col>
                    </Row>
                    <Col ><hr></hr>
                        Posted by: {data.users_permissions_user.username}</Col>
                    {authTokens && <Col ><hr></hr><h3>More Details:</h3> {data.description}</Col>}
                </Col>
                <Col md={6}>
                    {authTokens ? (
                        <>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3 validated-form" controlId="textarea" noValidate>
                                        <Form.Label>Leave a comment</Form.Label>
                                        <Form.Control as="textarea" required rows={3} />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter a comment.
                                        </div>
                                    </Form.Group>
                                    <Button type="submit">Post</Button>
                                </Form>
                                {console.log(data)}
                                <hr />
                                <h2>Comments:</h2>
                                {data.comments.map(u => {
                                    return <div className="comment-body">
                                        <p className="comment-content" >
                                            {u.content} </p>
                                        <br></br>
                                        <div className='comment-author text-muted'> Comment added by : user {u.users_permissions_user}</div>
                                    </div>
                                })}
                            </Col>  </>) :
                        (<Col><hr></hr><h3>More Details:</h3> {data.description}</Col>)
                    }
                </Col>
            </Row>
        </Container >

    )
}
