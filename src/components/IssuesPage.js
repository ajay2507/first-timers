import React, { Component } from 'react';
import IssuesList from './IssuesList';
import './App.css';

class IssuesPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">First Timers</h1>
        </header>
        <IssuesList />
      </div>
    );
  }
}

export default IssuesPage;
