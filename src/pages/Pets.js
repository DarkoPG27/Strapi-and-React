import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import SiteHeader from '../components/SiteHeader';


export default function Pets() {
    const { loading, error, data } = useFetch('http://localhost:1337/pets');

    if (loading) return <p className='messages'>Loading...</p>
    if (error) return <p className='messages'>Error fetching data :(</p>

    return (
        <>
            <SiteHeader />
            <div className='all-pets'>

                {data.map(pet => (
                    <Card className='card' style={{ width: '18rem' }} key={pet.id}>
                        <Link className='card-category' to={`/details/${pet.id}`}>{pet.name}</Link>
                        <Card.Img className='card-image' variant="top" src={`http://localhost:1337${pet.image.formats.small.url}`} />
                        <Card.Body>
                            <Card.Text >{pet.description.substring(0, 100)}...</Card.Text>
                            <Link to={`/details/${pet.id}`}>Read more...</Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}