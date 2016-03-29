import React from 'react';

import App from './main.jsx';
import {render} from 'react-dom';

const doc = document.createElement('div');
document.body.appendChild(doc);

render(<App />, doc);
