import React from 'react'
import CardList from './MoviesCardsList';
import { movies } from './movies'
import './movies.css'

const Movies = () => {

    return (
        <div
            style={{
                
                overflow : 'hidden',
                borderRadius:'25px',
                display:'flex',
            }} className="overall">
            <CardList movies={movies} className="CardList" />
        </div>
    );

}

export default Movies;