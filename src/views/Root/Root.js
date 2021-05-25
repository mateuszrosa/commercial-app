import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from '../../components/Main/Main';
import Menu from '../../components/Menu/Menu';
import Products from '../Products/Products';
import './index.css';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Header open={open} setOpen={setOpen} />
      <Menu open={open} setClose={setOpen} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
