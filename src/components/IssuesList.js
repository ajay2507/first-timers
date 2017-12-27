import React, { Component } from 'react';
import axios from 'axios';

class IssuesList extends Component {

    componentDidMount(){
       console.log("component did mount");
       
       
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
