import './App.css';
import { HashRouter as Router, Route, Switch, Routes, Link } from 'react-router-dom';
import DrawerAppBar from './MenuBar';
import Home from './Home';
function App() {
  return (
    
  <div>
    <DrawerAppBar/>
    <></>
    <Router>
      
      {/* <Link to="/">Home</Link> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  </div>
      

    
  );
}

export default App;
