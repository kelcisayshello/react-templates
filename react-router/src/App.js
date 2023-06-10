import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Landing from "./pages/Landing"
import HTMLPage from "./pages/HTMLPage"

function App() {
  return (
    <div className="App">

      <h1>React Router</h1>

      <div className="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/HTMLPage">HTML Page</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="HTMLPage" element={<HTMLPage />} />
      </Routes>

      <div className='Footer'>
        <footer>
          <ul>
            <li>Copyright @ 2023 - template by&nbsp;
              <Link to="https://www.github.com/kelcisayshello" target="_blank" rel="noopener noreferrer" >@kelcisayshello</Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
