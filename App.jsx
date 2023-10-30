import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './client/components/Navbar';
import Campsdisplay from './pages/CampsDisplay';
import Singlecamp from './pages/SingleCamp';
import CampForm from './pages/CampForm';

function App() {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Campsdisplay /> } />
                <Route path="/camps/new" element={ <CampForm /> } />
                {/* query, param, put it  into context */}
                <Route path="/camps/:campId" element={ <Singlecamp /> } />
            </Routes>
        </div>
    )
}

export default App;