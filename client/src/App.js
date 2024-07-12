import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Edit from './components/Edit.js';
import Details from './components/Details.js';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/register" Component={Register} />
      <Route exact path="/edit/:id" Component={Edit} />
      <Route exact path="/view/:id" Component={Details} />
    </Routes>
    </>
  );
}

export default App;
