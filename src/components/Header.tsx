import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'


type HeaderProps = {
  handleToggleTheme: () => void;
  theme: boolean
}

const Header = ({handleToggleTheme, theme}: HeaderProps) => {

  return (
    <header 
      className="
        w-full flex justify-between items-center 
        text-veryDarkBlueLM p-8 bg-veryLightGray shadow-md
        dark:bg-darkBlue dark:text-white
        ">
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