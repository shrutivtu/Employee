//import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home.js';
import { AddEmployee } from './AddEmployees.js';
import { Editemployee } from './EditEmployees.js';
import './stylesheet/Style.css';
import { GlobalProvider } from './GlobalState';


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={Editemployee} exact />
      </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}


export default App;