import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./component/Hello";
import { HelloBlueprint } from "./component/HelloBlueprint";
import { LoginContainer } from "./component/Login";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("tsExample")
);

ReactDOM.render(
    <HelloBlueprint />,
    document.getElementById("blueprintExample")
);

ReactDOM.render(
    <LoginContainer />,
    document.getElementById("loginTest")
);