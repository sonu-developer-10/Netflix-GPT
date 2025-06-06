import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div className='flex justify-center py-72 bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg)] bg-blend-multiply min-h-screen bg-center bg-cover bg-black bg-opacity-50'> 
        <GptSearchBar />
        <GptMovieSuggestions /> 
    </div>
  )
}

export default GptSearch;