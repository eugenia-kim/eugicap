import * as React from 'react';
import './App.css';

import '@blueprintjs/core/lib/css/blueprint.css';

import Login from './login/Login'
import Submit from './submit/Submit';
import { Route, BrowserRouter } from "react-router-dom";
import Bet from './bet/Bet';
//import SignUp from './login/Signup';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

const usernameAttributes = 'Username';

const signUpConfig = {
  header: 'Welcome to EugiCap!',
  hideAllDefaults: true,
  defaultCountryCode: '44',
  signUpFields: [
    {
      label: usernameAttributes,
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    {
      label: 'PhoneNumber',
      key: 'phone_number',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string'
    }
  ]
};

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

export default withAuthenticator(App, true, undefined, undefined, {
  signUpConfig,
  usernameAttributes
});
