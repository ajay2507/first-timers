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
        if(this.props.language != prevProps.language){
            axios.get("https://api.github.com/search/issues?q=label:%22good+first+issue%22+language:"+this.props.language+"+state:open&sort=created&order=asc")
                .then(function (response) {

                    this.setState({
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
            <div>
                <IssueCard />
            </div>
        );
    }
}

export default IssuesList;
