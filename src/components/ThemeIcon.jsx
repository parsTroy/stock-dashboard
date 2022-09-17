import { MoonIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeIcon = () => {

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <button className={`ml-10 w-12 h-12 rounded-lg border-1 border-neutral-400 p-2 shadow-lg ${darkMode ? "shadow=gray-800" : null} transition duration-300 hover:scale-125`} onClick={toggleDarkMode}>
        <MoonIcon className={`h-8 w-8 cursor-pointer stroke-1 fill-none stroke-neutral-400 ${darkMode ? 'fill-[var(--accent-2-color)] stroke-[var(--accent-2-color)]' : 'fill-none stroke-neutral-400'}`} />
    </button>
  )
}

export default ThemeIcon