import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {  
    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div className="nav-lists">
            <h3>Sumin</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    );
}

export default Nav;