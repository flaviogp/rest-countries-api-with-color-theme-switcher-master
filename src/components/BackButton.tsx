import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const BackButton = () => {
  return (
    <Link to="/" 
      className='
        py-4 px-10 rounded-md shadow-shadowButton w-min flex gap-4 
        font-bold no-underline text-veryDarkBlueLM
        dark:text-white  
      '
    >
        <FontAwesomeIcon icon={faArrowLeft}/>
        Back
    </Link>
  )
}

export default BackButton