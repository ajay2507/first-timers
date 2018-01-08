import React, { Component } from 'react';
import axios from 'axios';

class IssueCard extends Component {

    constructor(props){
        super(props);
    }

    getRepoName(value){
        console.log("getRepoName "+value);
        let stringArray = value.split('/');
        return stringArray[stringArray.length-1];
    }

    render(){
        let card = this.props.cardItem;
        return (

            <div className="card">
                <div className="card-header-color card-header">
                    <h4 className="card-title-style">{this.getRepoName(card.repository_url)}</h4>
                </div>
                <div className="card-block">
                    <blockquote className="card-blockquote">
                        <h4>{card.title}</h4>
                        <p>{card.body}</p>
                        <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        <a href={card.html_url} className="card-link">View Issue</a>
                    </blockquote>
                </div>
            </div>
        )
    }
}

export default IssueCard;