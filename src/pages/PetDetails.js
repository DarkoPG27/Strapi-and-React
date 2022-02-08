import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

export default function PetDetails() {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:1337/pets/' + id);

    if (loading) return <p className='messages'>Loading...</p>
    if (error) return <p className='messages'>Error fetching data :(</p>

    console.log(data)
    return (
        <div className='pet-details'>

            <h1 className='pet-name'>{data.name}</h1>

            <Image fluid variant="top" src={`http://localhost:1337${data.image.url}`} />

            <Link className='card-category' to={`/category/${data.category.id}`}>
                <button>{data.category.name}</button> </Link>

            <div>{data.description}</div>

        </div>
    )
}
