import React from 'react';

const UserList = () => {
  const users = [
    { id: 0, name: 'Esmaeil MIRZAEE' },
    { id: 4, name: 'Dohn Doe' },
    { id: 2, name: 'Stephan Hawking' },
    { id: 3, name: 'Lorem Ipsum' },
    { id: 5, name: 'Ipsum Lorem' },
  ];

  const getUsers = users.map((user) => {
    return (
      <div key={user.id} className='ui list'>
        <div className='item'>
          <div className='comment'>
            <i className='help avatar'></i>
            <a className='header'>{user.name}</a>
            <div className='description'>
              User number{' '}
              <a>
                <b>{Math.floor(Math.random() * Math.floor(1000))}</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{getUsers}</>;
};

export default UserList;
