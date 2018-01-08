import React, { Component } from 'react';
import IssuesList from './IssuesList';
import SearchComponent from './SearchComponent';
import BadgeComponent from './BadgeComponent';
import Footer from './Footer';

import GithubCorner from 'react-github-corner';
import './App.css';


/* IssuePage component to show the search and issue list based on the selected language */

class IssuesPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            lang: '',
        }
        this.selectLang = this.selectLang.bind(this);
    }

    selectLang(value){
        console.log("onchange");
        console.log(value);
        this.setState({ lang: value})
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>First Timers - Open Source Contribution</h1>
        </header>
          <SearchComponent onLangChange={this.selectLang} />
          <BadgeComponent filterByBadge={this.selectLang} />
        <IssuesList language={this.state.lang} />
          <Footer />
      </div>
    );
  }
}

export default IssuesPage;
