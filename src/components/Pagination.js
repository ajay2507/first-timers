import React, { Component } from 'react';

const Pagination = () => {


    return (
        <div className="text-center">
            <button className="button blue" onClick={this.prevPage} >Prev</button>
            <button className="button blue" onClick={this.nextPage} >Next</button></div>
    )
}

export default Pagination;