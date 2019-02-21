import { getDomElement } from './services/dom';
import App from './App';

import './style/main.css';

const root = getDomElement('#root');

const app = new App(root);
app.render();
