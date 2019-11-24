import * as React from 'react';
import './App.css';

import '@blueprintjs/core/lib/css/blueprint.css';

import Login from './login/Login'
import Submit from './submit/Submit';
import { Route, BrowserRouter } from "react-router-dom";
import Bet from './bet/Bet';
//import SignUp from './login/Signup';
import Amplify, { Auth, Hub, Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, withOAuth } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import { CognitoUser } from '@aws-amplify/auth';

Amplify.configure(awsconfig);

interface AppState {
  user: CognitoUser | null;
  customState: any | null;
}
class App extends React.Component<{}, AppState> {
  state: AppState = { user: null, customState: null };
  componentDidMount() {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.setState({ user: data });
          break;
        case "signOut":
          this.setState({ user: null });
          break;
        case "customOAuthState":
          this.setState({ customState: data });
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(() => console.log("Not signed in"));
  }

  public render() {
    const { user } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          {/* <button onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook })}>Open Facebook</button> */}
          <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
          <button onClick={() => Auth.signOut()}>Sign Out {user ? user.getUsername() : ""}</button>

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

export default withOAuth(App);
