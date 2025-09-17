import './App.css'
import { Routes, Route } from "react-router-dom";
import Footer from './Footer'
import Header from './Header'
import HomePage from './HomePage'
import History from './History'
import Aims from './Aims';

function App() {
    return (
        <div className="App">
            <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/history" element={<History />} />
                    <Route path="/objectives" element={<Aims />}/>
                </Routes>
            <Footer />
        </div>
    )
}

export default App
