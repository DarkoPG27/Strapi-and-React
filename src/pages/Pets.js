import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Pets() {

    const { loading, error, data } = useFetch('http://localhost:1337/pets')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error fetching data :(</p>
    console.log(data)
    return (
        <div className='all-pets'>
            {data.map(pet => (
                <div key={pet.id} className="pet-card">
                    <img src={`http://localhost:1337${pet.image.name}`} alt="" />
                    <h2>{pet.name}</h2>

                    <small>{pet.category.name}</small>

                    <p>{pet.description.substring(0, 100)}...</p>
                    <Link to={`/details/${pet.id}`}>Read more...</Link>

                </div>
            ))}
        </div>

    )
}
