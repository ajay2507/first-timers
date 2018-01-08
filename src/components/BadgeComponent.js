import React, { Component } from 'react';
import axios from 'axios';
var LangData = require('./LangData');

const BadgeComponent = ({filterByBadge}) => {

    return (

            <div className="margin-top">
                {LangData.map((lang,index) => {
                    return(
                        <span key={index} onClick={filterByBadge.bind(this,lang.name)} className="label badge">{lang.name}</span>)
            })}
            </div>

        )

}

export default BadgeComponent;