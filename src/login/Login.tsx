import * as React from "react";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider, CognitoUser } from "@aws-amplify/auth";

export const header = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    'Access-Control-Allow-Origin': "*"
};

export interface ILoginProps {
    user: CognitoUser | null;
}

class Login extends React.PureComponent<ILoginProps, {}> {

    public render() {
        return (
            // <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="false" />
            <div>
                <button onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook })}>Open Facebook</button>
                <button onClick={() => Auth.signOut()}>Sign Out {this.props.user ? this.props.user.getUsername() : ""}</button>
            </div>

        );
    }
}

export default Login