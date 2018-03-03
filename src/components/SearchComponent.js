import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete'
const LangData = require('./LangData');

/* Autocomplete component to search github languages */

class SearchComponent extends Component {


    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            value: ''
        }
        //this.selectLanguage = this.selectLanguage.bind(this);

    }

    selectLanguage(value){
        this.props.onLangChange(value);
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div className="margin-top search-bar">
                <Autocomplete
                    items={LangData}
                    shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.name}
                    inputProps={{ placeholder: 'Search by languages here...'}}
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
                    onSelect={this.selectLanguage.bind(this)}
                />
            </div>
        );
    }
}

export default SearchComponent;