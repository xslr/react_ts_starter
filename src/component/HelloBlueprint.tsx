import * as React from "react";
import { AnchorButton, Button, Icon, InputGroup, Intent, Spinner } from "@blueprintjs/core";

function helloHandler(event: React.MouseEvent) {
    alert('boops');
}

export interface HelloBlueprintProps { };

export const HelloBlueprint = (props: HelloBlueprintProps) =>
    <div>
        <Button
            icon="user"
            intent="danger"
            text="Hello blueprint"
            onClick={(event: React.MouseEvent) => helloHandler(event)} />

        <AnchorButton text="Click" intent="success" />
    </div>