import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Add from './Add'; 
import BlogDetail from './BlogDetails';

function App() {

  return (
    
   <Router>
      <div className="App">
      <Navbar/>
   <div className='content'>
    
    <Switch>

      <Route exact path='/'>
        <Home/>
      </Route>

      <Route exact path='/add'>
        <Add />
      </Route>

      <Route exact path= '/blog/:id'>
        <BlogDetail/>
      </Route>

    </Switch>
   </div>

    </div>
  </Router>
  );
}

export default App;
