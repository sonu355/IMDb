import './App.css';
import { routePath } from './constants/Route';
import Home from './pages/Home';
import MoviesCategory from './pages/MoviesCategory'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />}/>
        <Route path={routePath.categories} element={<MoviesCategory />}/>
        <Route path={routePath.invalid} element={<Home />}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;
