import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FeedPage from './pages/FeedPage'
import FeedDetails from './pages/FeedDetails'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/details/:id' component={FeedDetails}></Route>
        <Route path='/feed' component={FeedPage}></Route>
        <Route path='/' component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
