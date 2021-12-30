import { render } from 'react-dom';
import { connectReduxDevtools } from 'mst-middlewares';
import store from './Stores/ToDoStore';
import App from './App';

const remotedev = require('remotedev');

connectReduxDevtools(remotedev, store);

render(<App />, document.getElementById('root'));
