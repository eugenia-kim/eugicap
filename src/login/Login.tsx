import * as React from "react";

export const header = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    'Access-Control-Allow-Origin': "*"
};

class Login extends React.PureComponent {

    public render() {
        return (
            <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="false" />
        );
    }
}

export default Login