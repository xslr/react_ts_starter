import * as React from "react";
import { AnchorButton, Button, FormGroup, Icon, InputGroup, Intent, Spinner } from "@blueprintjs/core";
import LoginStyle from "./Login.scss";

interface LoginContainerProps {};
interface LoginContainerState {};
export class LoginContainer extends React.Component<LoginContainerProps, LoginContainerState> {
    handleSubmit() {
    }

    render() {
        return (
            <form>
            <FormGroup
                   label="Label A"
                    labelFor="text-input"
                    labelInfo="(required)"
                    >
                <div className={LoginStyle.loginContainer}>
                    <InputGroup id="txtLogin" placeholder="email" type="email" />
                    <InputGroup id="txtPassword" placeholder="password" type="password" />
                    <Button id="btnLogin" type="submit" onClick={this.handleSubmit}>Login</Button>
                </div>
            </FormGroup>
            </form>
        );
    }
}