import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';

export default function PetDetails() {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:1337/pets/' + id);

    if (loading) return <p className='messages'>Loading...</p>
    if (error) return <p className='messages'>Error fetching data :(</p>

    return (
        <div className='pet-details'>

            <h1 className='pet-name'>{data.name}</h1>

            {data.galeryImages.length > 1 ?
                (<Carousel className="d-flex w-50">

                    {data.galeryImages.map(i => {
                        return <Carousel.Item key={i.hash} interval={3000}>
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
            <Link className='card-category' to={`/category/${data.category.id}`}>
                <button>{data.category.name}</button> </Link>

            <div>{data.description}</div>

        </div >
    )
}
