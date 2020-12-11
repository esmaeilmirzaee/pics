import React from 'react';

import SearchBar from './SearchBar';
import Password from './Password';

const App = () => {
  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <SearchBar />
      <Password />
    </div>
  );
};

export default App;
