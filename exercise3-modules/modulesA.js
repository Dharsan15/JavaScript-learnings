import { topMovies } from './modulesB.js';

const checkmovie = (movieName) => {
    if(topMovies.includes(movieName))
    {
        return true;
    }

    else {
        return false;
    }
}

export {checkmovie}