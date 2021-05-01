import React from 'react';
import Cards from './MoviesCard';
// import robots from './robots';


const CardList = ({movies}) => {
    const CardsArray = movies.map((user,i) => {
        return <Cards key={i} id={movies[i].id} 
        name = { movies[i].name } 
        Bio = { movies[i].Bio }
        year = { movies[i].year}
        />
     })
    return (
        <div>
        {CardsArray}
        </div>
    );
}

export default CardList;