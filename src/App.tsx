import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage.tsx";
import AppNavbar from "./components/AppNavbar.tsx";

function App() {

    return (
        <>
            <AppNavbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </>
    )
}

export default App
