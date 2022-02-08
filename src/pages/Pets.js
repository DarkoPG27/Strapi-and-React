import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Pets() {

    const { loading, error, data } = useFetch('http://localhost:1337/pets')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error fetching data :(</p>
    console.log(data)
    return (
        <div className='all-pets'>
            {data.map(pet => (
                <Card className='card' style={{ width: '18rem' }} key={pet.id}>
                    <Link to={`/categories/${pet.category.name}`}> {pet.category.name}</Link>

                    <Card.Img className='card-image' variant="top" src={`http://localhost:1337${pet.image.formats.small.url}`} />

                    <Card.Body>
                        <Card.Title> Name: {pet.name}</Card.Title>
                        <Card.Text >
                            {pet.description.substring(0, 100)}...
                        </Card.Text>

                        <Link to={`/details/${pet.id}`}>Read more...</Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}