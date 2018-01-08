import React, { Component } from 'react';
import axios from 'axios';
import IssueCard from  './IssueCard';

// Fetch all the open issues for Good First Issue
class IssuesList extends Component {

    constructor(props){
        super(props);
        this.state = {
            issueList: []
        }
    }

    componentDidUpdate(prevProps,prevState){
        let that = this;
        if(this.props.language != prevProps.language){
            axios.get("https://api.github.com/search/issues?q=label:%22good+first+issue%22+language:"+this.props.language+"+state:open&sort=created&order=asc")
                .then(function (response) {
                    console.log(response);
                    that.setState({
                        issueList: response.data
                    })

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    render() {
        return (
            <div className="container margin-top">
                <div className="row">
            <div>

                {this.state.issueList.items != undefined &&
                <div className="card-list"><h2>{this.props.language+" "}Projects</h2>
                    {this.state.issueList.items.map((item, index) => {
                        return ( <IssueCard cardItem={item} key={index}/>)})}
                </div>}
                {this.state.issueList.length == 0 && <h2>Want to contribute open source! Search the projects with good first issue to contribute</h2>}
            </div></div></div>
        );
    }
}

export default IssuesList;
