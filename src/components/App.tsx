import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "../pages/Home"
import CountryDetails from "../pages/CountryDetails"
import ErrorPage from "./ErrorPage"
import { useState } from "react"

const App = () => {
  const [theme, setTheme] = useState(true); // True: Light , False: Dark

  const handleToggleTheme = () => setTheme(!theme);
  return (
    <div 
      className={`
        w-full min-h-[100vh] flex flex-col items-center bg-veryLightGray
        ${!theme ? 'dark' : ''} dark:bg-veryDarkBlueDM
      `}>
        <Header handleToggleTheme={handleToggleTheme} theme={theme}/>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/country/:name" element={<CountryDetails />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </div>
  )
}

export default App