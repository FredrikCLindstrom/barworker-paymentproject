import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Orders from "./Components/Orders";
import Help from "./Components/Help";

function App() {
    return (
        <div className="App">
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Menu" element={<Menu/>}/>
                        <Route path="/Orders" element={<Orders/>}/>
                        <Route path="/Help" element={<Help/>}/>
                    </Routes>
                </Router>
            </>
        </div>
    );
}

export default App;
