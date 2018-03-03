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

            <div className="card">
                <div className="card-header-color card-header">
                    <h4 className="card-title-style"><a href={"card.html_url"}>{this.getRepoName(card.repository_url)}</a></h4>
                </div>
                <div className="card-block">
                    <blockquote className="card-blockquote">
                        <h5>{card.title}</h5>
                        
                        <footer>{card.labels.map((label,index) => {
                            return(<span key={index}  style={divStyle} className="badge label">{label.name}</span>)
                        })}</footer>
                        <a href={card.html_url} className="card-link">View Issue</a>
                    </blockquote>
                </div>
            </div>
        )
    }
}

export default IssueCard;