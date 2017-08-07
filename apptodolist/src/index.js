import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddTodoBar from './TodoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AddTodoBar />, document.getElementById('root'));
registerServiceWorker();
