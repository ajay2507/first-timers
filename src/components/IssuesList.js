import React, { Component } from 'react';
import axios from 'axios';

class IssuesList extends Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("component did update");
        console.log(prevProps);
        console.log(this.props);
    }

    componentDidMount(){
       console.log("component did mount");
        axios.get('https://api.github.com/search/issues?q=label:%22good+first+issue%22+language:javascript+state:open&sort=created&order=asc')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                Issue List
            </div>
        );
    }
}

export default IssuesList;
