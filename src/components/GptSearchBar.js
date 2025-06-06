import React from 'react'
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className='w-1/2 mx-auto'>
        <form className='p-3 gap-3 items-center bg-black grid grid-cols-12'>
           <input name='search' type='text' className='px-2 py-2 col-span-8' placeholder={lang[langKey].gptSearchPlaceholder} />
           <button className='py-2 px-3 col-span-4 bg-red-600 text-white font-semibold'>{lang[langKey].search}</button> 
        </form>
    </div>
  )
}

export default GptSearchBar;
