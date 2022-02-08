import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function PetDetails() {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:1337/pets/' + id);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error fetching data :(</p>

    console.log(data)
    return (
        <div className='pet-details'>

            <h1>{data.name}</h1>

            <img variant="top" src={`http://localhost:1337${data.image.url}`} />

            <Link className='card-category' to={`/categories/${data.category.id}`}> {data.category.name}</Link>

            <div>{data.description}</div>

        </div>
    )
}
