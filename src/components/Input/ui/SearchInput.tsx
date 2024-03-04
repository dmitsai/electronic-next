'use client';
import { useState } from 'react';
import SearchIcon from '~/assets/icons/search-icon.svg';


export const SearchInput:React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    return (
        <div className={'group relative w-full '}>
        <input
            className= {'peer h-12 w-full rounded-full border px-10 text-xs outline-none justify-center items-center text-black '}
            onChange={handleChange}
        />
        <label
            className={'pointer-events-none absolute transform transition-all left-0 top-0 px-10 h-full items-center pl-2 text-xs  text-slate-700  flex flex-row w-full justify-between'}
        >
           <p className={`flex  pl-10 transform transition-all ${inputValue? 'hidden':''}`}>Найти...</p>
           <SearchIcon  className={`h-4 w-4 stroke-gray-600   transform transition-all ${inputValue? 'hidden':''}`}/>
        </label>
    </div>
    )
}