
import './App.scss';
import './App.less'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Resume from './pages/Resume.js'

function App() {
  return (
    
       <Switch>
    
    
    <Route path="/projects">
        <Projects />
    </Route>
    <Route path="/">
      <Home />
    </Route>
</Switch>
   
   
  );
}

export default App;
