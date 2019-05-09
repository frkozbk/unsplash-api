import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' }


    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    onFormSubmit(event) {


    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="search">
                        <label>Image Search</label>
                        <input type="text"
                            placeholder="Search and press ENTER"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value.toLocaleUpperCase() })}
                        />

                    </div>
                </form>
            </div>);
    }
}

export default SearchBar;