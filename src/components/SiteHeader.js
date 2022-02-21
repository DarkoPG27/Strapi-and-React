import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


export default function SiteHeader() {

    const { loading, error, data } = useFetch('http://localhost:1337/categories');

    if (loading) return <p className='messages'></p>
    if (error) return <p className='messages'>Error fetching data :(</p>
    console.log(data)
    return (
        <div className="site-header">
            {/*   <Link to="/" ><h1>Pets</h1></Link> */}
            <nav className='categories'>
                <span>Filter pets by categories:</span>
                <Link to={'/pets'} ><button>All Pets</button></Link>
                {data.map(category => (
                    <Link key={category.id} to={`/category/${category.id}`} ><button>{category.name}</button></Link>
                ))}
            </nav>

        </div>
    )
}