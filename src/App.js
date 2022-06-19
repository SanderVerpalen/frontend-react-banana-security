import NavBar from './components/NavBar';
import './App.css';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
      <>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <home />
            </Route>
            <Route path="/request-offer">
              <requestOffer />
            </Route>
          </Switch>
        </div>
      </>
  );
}

export default App;
