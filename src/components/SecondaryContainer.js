import { useSelector } from "react-redux"
import MovieList from "./MovieList"
// import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
  return movies.nowPlayingMovies && (
    <div className="">
      <div className="relative -mt-60">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> 
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} /> 
        <MovieList title={"Popular"} movies={movies.popularMovies} /> 
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />  
        {/* 
        
          MovieList - Popular
            MovieCards * n
          MovieList - Now Playing
          MovieList - Trending
          MovieList - Horror

        */}
        </div>
    </div>
  )
}

export default SecondaryContainer