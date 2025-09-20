import './App.css'
import { Routes, Route } from "react-router-dom";
import Footer from './Footer'
import Header from './Header'
import HomePage from './HomePage'
import History from './History'
import Aims from './Aims';
import Founder from './founder';
import ElearningPortal from './ElearningPortal';
import Institutes from './Institutes';
import Executives from './Executives';

function App() {
    return (
        <div className="App">
            <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/history" element={<History />} />
                    <Route path="/objectives" element={<Aims />}/>
                    <Route path="/founders" element={<Founder />}/>
                    <Route path="/elearning" element={<ElearningPortal/>}/>
                    <Route path="/institutes" element={<Institutes/>}/>
                    <Route path="/executives" element={<Executives/>}/>
                </Routes>
            <Footer />
        </div>
    )
}

export default App
