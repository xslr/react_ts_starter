import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {App} from './app';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
