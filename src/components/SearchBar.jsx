import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }
  state = { term: '' };

  onSubmitSearch(e) {
    e.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <>
        <div className='ui right action fluid left icon input massive'>
          <i className='search icon teal'></i>
          <input
            type='text'
            placeholder='Search'
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <div className='ui basic teal button' onClick={this.onSubmitSearch}>
            Search
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
