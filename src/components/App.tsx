import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "../pages/Home"
import CountryDetails from "../pages/CountryDetails"
import ErrorPage from "./ErrorPage"

const App = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center bg-veryLightGray">
        <Header />
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/country/:name" element={<CountryDetails />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </div>
  )
}

export default App