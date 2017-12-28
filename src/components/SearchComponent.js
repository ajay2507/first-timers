import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete'
var LangData = require('./LangData');

/* Autocomplete component to search languages */

class SearchComponent extends Component {


    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
    }

     render() {
        return (
            <div>
                <Autocomplete
                    items={LangData}
                    shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.name}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item.id}
                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                        >
                            {item.name}
                        </div>
                    }
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => this.setState({ value })}
                />
            </div>
        );
    }
}

export default SearchComponent;
