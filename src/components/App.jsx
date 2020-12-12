import React from 'react';
import axios from '../api/unsplash';

import SearchBar from './SearchBar';
import Password from './Password';

import ImageList from './ImageList';
import UserList from './UserList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get('search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className='ui mini message green'>{`${this.state.images.length} items has been found.`}</div>
        <ImageList images={this.state.images} />
        <Password />
        <h3 className='ui comments'>Comments</h3>
        <UserList />
      </div>
    );
  }
}

export default App;
