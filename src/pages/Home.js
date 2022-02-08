import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className='home'>
            <div className="content">
                <div className="title">
                    <h1>Rehoming</h1>
                </div>
                <div className="subtitle">
                    <p>A pet is for life, not just for Christmas</p>
                </div>
                <Link to={`/pets`}>
                    <button>See Pets</button> </Link>
                <div className="bottom">
                    <h3>Your rehoming jorney starts here</h3>
                </div>
            </div>


        </div>
    )
}
