import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./component/Hello";
import { Game } from "./component/TicTacToe";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("tsExample")
);

ReactDOM.render(
  <Game />,
  document.getElementById('tictactoe-root')
);
