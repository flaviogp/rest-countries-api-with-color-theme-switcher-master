import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


const Header = () => {
  const [theme, setTheme] = useState(true);

  const handleToggleTheme = () => setTheme(!theme);

  return (
    <header className="container flex justify-between items-center text-veryDarkBlueLM ">
        <strong>Where in the world?</strong>
        <div className="flex gap-4 items-center">
            <FontAwesomeIcon 
              icon={theme ? faMoon : faSun} 
              onClick={() => handleToggleTheme()}
              className="cursor-pointer"
              />
            <p>{theme ? 'Dark Mode' : 'Light Mode'}</p>
        </div>
    </header>
  )
}

export default Header