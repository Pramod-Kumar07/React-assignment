import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Favourites.module.css';
import { deleteMovie } from './FavMovieSlice';

function Favourites() {
    const favMovieState = useSelector((state)=>state.favMovie);
    const dispatch = useDispatch();

    function handleRemove(key){
      dispatch(deleteMovie(key))
    }

  return (
    <div>
      <h2>Favourite Movies</h2>
        <div className={styles.movieContainer} >
            {
                favMovieState.favMovie.map((movies)=>{
                    return (                    
                    <div className={styles.movieCard} key={movies.imdbID}> 
                    <img className={styles.image} src={movies.Poster} alt="poster"/>
                    <h3 className={styles.name}>{movies.Title}</h3>
                    <span>({movies.Year})</span>
                    <br></br>
                    <button onClick={()=>handleRemove(movies.imdbID)} className={styles.button}>Remove</button>
                    </div>
                    )
                    }
                )
            }
        </div>
    </div>
  )
}

export default Favourites;