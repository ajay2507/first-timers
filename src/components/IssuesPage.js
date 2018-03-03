import React, { Component } from 'react';
import IssuesList from './IssuesList';
import SearchComponent from './SearchComponent';
import BadgeComponent from './BadgeComponent';
import GithubCorner from 'react-github-corner';
import Footer from './Footer';
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
          <h2 className="bold">First Timers - Contribute Open Source!</h2>
            <p>we are here to help on beginners to contribute open source.</p>
            <p>search issues based on programming language, read the contributor guidelines and enjoy coding.</p>
        </header>
          <GithubCorner
              href={"https://github.com/ajay2507/first-timers"}
              bannerColor="#70B7FD"
              octoColor="#fff"
              size={80}
              direction="right"
          />
          <SearchComponent onLangChange={this.selectLang} />
          <BadgeComponent filterByBadge={this.selectLang} />
        <IssuesList language={this.state.lang} />
          <Footer />
      </div>
    );
  }
}

export default IssuesPage;
