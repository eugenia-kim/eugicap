import * as React from 'react';
import './App.css';

import '@blueprintjs/core/lib/css/blueprint.css';

import Login from './login/Login'
import Submit from './submit/Submit';
import { Route, BrowserRouter } from "react-router-dom";
import Bet from './bet/Bet';
//import SignUp from './login/Signup';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Submit} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/signup" render={this.renderSignUp} /> */}
          <Route path="/bet/:id" component={Bet} />
        </div>
      </BrowserRouter>
    );
  }

  // private renderSignUp = (props: any) => (<Submit {...props} />)
}

export default App;
