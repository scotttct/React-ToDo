
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavTop from './components/NavTop'
import  Home  from "./pages/home/Home"
import { About } from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <>
        <NavTop />
      </>
      
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
