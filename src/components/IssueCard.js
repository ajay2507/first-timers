import React, { Component } from 'react';
import axios from 'axios';

class IssueCard extends Component {
    
    
    constructor(props){
        super(props);
    }

    getRepoName(value){
        //console.log("getRepoName "+value);
        let stringArray = value.split('/');
        return stringArray[stringArray.length-1];
    }

    render(){
        let card = this.props.cardItem;
        const divStyle = {
            fontSize: '13px',
            backgroundColor: '#9E9E9E',
        };
        return (

        <div className="col-sm-3">
        <div className="card">
            <div className="card-block">
                <h3 className="card-title">{this.getRepoName(card.repository_url)}</h3>
                <p className="card-text">{card.title}</p>
                {card.labels.map((label,index) => { return(
                <span key={index} style={divStyle} className="badge label">{label.name}</span>) })}
                <div class="card-footer margin-top">
                    <a target="_blank" href={card.html_url} className="card-link">View Issue</a>
                </div>
            </div>
        </div>
    </div>
            
        )
    }
}

export default IssueCard;