import * as React from "react";
import { InputGroup, Button, Intent, Tooltip, Divider, ButtonGroup, Dialog } from '@blueprintjs/core';
// import { AuthenticationDetails, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
// import userPool from './aws';
import { handleStringChange } from '@blueprintjs/docs-theme';
import { Redirect } from 'react-router';
import PageHeader from '../header/PageHeader';
// import { CognitoUserSingleton } from 'src/user/CognitoUserSingleton';

export const header = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    'Access-Control-Allow-Origin': "*"
};

export interface ISignUpState {
    showPassword: boolean;
    email: string;
    password: string;
    signedIn: boolean;
    isOpen: boolean;
}

class SignUp extends React.PureComponent<ISignUpState> {

    public state: ISignUpState = {
        showPassword: false,
        email: "",
        password: "",
        signedIn: false,
        isOpen: false
    }

    private handlePasswordChange = handleStringChange((password: string) => this.setState({ password }));
    private handleEmailChange = handleStringChange((email: string) => this.setState({ email }));

    public render() {
        const { email, password, showPassword, signedIn } = this.state;
        const lockButton = (
            <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`}>
                <Button
                    icon={showPassword ? "unlock" : "lock"}
                    intent={Intent.WARNING}
                    minimal={true}
                    onClick={this.handleLockClick}
                />
            </Tooltip>
        );

        const form = (
            <div>
                <InputGroup
                    placeholder="Enter your email..."
                    type="email"
                    value={email}
                    onChange={this.handleEmailChange}
                />
                <InputGroup
                    placeholder="Enter your password..."
                    rightElement={lockButton}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={this.handlePasswordChange}
                />
            </div>
        );

        return (
            <div>
                <PageHeader signedIn={this.state.signedIn} />
                {form}
                <ButtonGroup vertical={true}>
                    <Button
                        text="Sign Up"
                        intent={Intent.PRIMARY}
                        onClick={this.preSignUp}
                    />
                    <Divider />
                    already have an account with us?
                <Button
                        text="Log in"
                        intent={Intent.PRIMARY}
                        onClick={this.handleOpen}
                    />
                </ButtonGroup>
                <Dialog
                    icon="person"
                    onClose={this.handleClose}
                    title="Log in"
                    isOpen={this.state.isOpen}
                >
                    {form}
                    <Button
                        text="Log in"
                        intent={Intent.PRIMARY}
                        onClick={this.signIn}
                    />
                </Dialog>

            </div>
        );
    }

    private handleOpen = () => this.setState({ isOpen: true });
    private handleClose = () => this.setState({ isOpen: false });

    private signIn = () => {
        // const authenticationData = {
        //     Username: this.state.email,
        //     Password: this.state.password,
        // };
        // const authenticationDetails = new AuthenticationDetails(authenticationData);

        // const userData = {
        //     Username: this.state.email,
        //     Pool: userPool
        // }

        // CognitoUserSingleton.setCognitoUserData(userData);
        // const cognitoUser: CognitoUser = CognitoUserSingleton.getInstance();
        // cognitoUser.authenticateUser(authenticationDetails, {
        //     onSuccess(result) {
        //         const accessToken = result.getAccessToken().getJwtToken();
        //         console.log(accessToken);
        //         console.log(cognitoUser);
        //     },
        //     onFailure(err) {
        //         alert(err);
        //     },
        //     mfaRequired(codeDeliveryDetails) {
        //         const verificationCode = prompt('Please input verification code', '');
        //         cognitoUser.sendMFACode(verificationCode ? verificationCode : '', this);
        //     }
        // });
        // if (cognitoUser) {
        //     this.setState({ signIn: true });
        // }
        this.handleClose();
    }

    private preSignUp = () => {
        // const attributeList = [];
        // const dataEmail = {
        //     Name: 'email',
        //     Value: this.state.email
        // };

        // const attributeEmail =
        //     new CognitoUserAttribute(dataEmail);

        // attributeList.push(attributeEmail);

        // userPool.signUp(this.state.email, this.state.password, attributeList, [], (err, result) => {
        //     if (err || !result) {
        //         alert(JSON.stringify(err));
        //         return;
        //     }
        //     CognitoUserSingleton.setCognitoUser(result.user);
        //     const cognitoUser = CognitoUserSingleton.getInstance();
        //     console.log('user name is ' + cognitoUser.getUsername());
        //     this.setState({ signUp: true });
        // });

        return (
            <Redirect to={{
                pathname: '/'
            }} />
        )
    }
    private handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });
}

export default SignUp