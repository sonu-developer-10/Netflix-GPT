import MovieCards from "./MovieCards";


const MovieList = ({ title, movies }) => {
  console.log(movies)
  return (
    <div className="flex flex-col w-11/12 mx-auto pb-4">
        <h1 className="text-xl font-semibold my-4 text-white">{title}</h1>
   
    <div className="flex overflow-x-scroll gap-5 no-scrollbar">
      {movies?.map((movie) => (
        
           <MovieCards key={movie.id} posterPath={movie.poster_path} /> 
      ))
      
      }
      
    </div> 
     </div>
  );
};

export default MovieList; 
