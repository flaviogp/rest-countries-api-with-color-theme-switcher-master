import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Loading = () => {
  return (
    <div className='w-full h-48 flex justify-center items-center'>
        <FontAwesomeIcon icon={faSpinner} className='w-10 h-10' />
    </div>
  )
}

export default Loading