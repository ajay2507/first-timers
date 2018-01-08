import React, { Component } from 'react';
import axios from 'axios';

class IssueCard extends Component {

    constructor(props){
        super(props);
    }

    getRepoName(value){
        console.log("getRepoName "+value);
    }

    render(){
        let card = this.props.cardItem;
        return (

            <div className="card">
                <div className="card-header">
                    {this.getRepoName.bind(card.repository_url)}
                </div>
                <div className="card-block">
                    <blockquote className="card-blockquote">
                        <h4>{card.title}</h4>
                        <p>{card.body}</p>
                        <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        <a href={card.html_url} class="card-link">View Issue</a>
                    </blockquote>
                </div>
            </div>
        )
    }
}

export default IssueCard;