import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IssuesPage from './components/IssuesPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IssuesPage />, document.getElementById('root'));
registerServiceWorker();
