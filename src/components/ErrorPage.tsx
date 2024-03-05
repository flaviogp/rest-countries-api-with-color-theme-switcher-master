import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-9xl"> 404! </h1>
            <Link to='/' className=" p-4 px-6 no-underline rounded-md shadow-shadowButton shadow-veryDarkBlueLM"> Back To Home </Link>
        </div>
    </div>
  )
}

export default ErrorPage