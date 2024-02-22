import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "../pages/Home"
import CountryDetails from "../pages/CountryDetails"

const App = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center bg-veryLightGray">
        <Header />
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
    </div>
  )
}

export default App