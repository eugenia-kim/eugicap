
import { Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

export interface IPageHeaderProps {
    signedIn: boolean;
}

class PageHeader extends React.PureComponent<RouteComponentProps<{}> & IPageHeaderProps, {}> {

    private handleHomeClick = () => {
        this.props.history.push('/');
    }

    private handleLoginClick = () => {
        this.props.history.push('/login');
    }

    private handleLogoutClick = () => {
        // const cognitoUser = CognitoUserSingleton.getInstance();
        // if (cognitoUser) {
        //     cognitoUser.signOut();
        //     CognitoUserSingleton.signOut();
        // }
        console.log("loggin out");
    }

    public signInButton = (<Button className={Classes.MINIMAL} icon="person" text="Log in/Sign up" onClick={this.handleLoginClick} />);
    public signOutButton = (<Button className={Classes.MINIMAL} icon="log-out" text="Log out" onClick={this.handleLogoutClick} />);

    public render() {
        return (
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>EugiCap</NavbarHeading>
                    <NavbarDivider />
                    <Button className={Classes.MINIMAL} icon="home" text="Home" onClick={this.handleHomeClick} />
                    {this.props.signedIn ? this.signOutButton : this.signInButton}
                </NavbarGroup>
            </Navbar>
        );
    }
}

export default withRouter(PageHeader);