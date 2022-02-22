import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SiteHeader() {

    const { loading, error, data } = useFetch('http://localhost:1337/categories');

    if (loading) return <p className='messages'></p>
    if (error) return <p className='messages'>Error fetching data :(</p>
    console.log(data)
    return (
        <div className="site-header">
            <nav className='categories'>
                <span>Filter pets by categories:</span>
                {data.map(category => (
                    <Link key={category.id} to={`/category/${category.id}`} ><button>{category.name}</button></Link>
                ))}


            </nav>

        </div>
    )
}
