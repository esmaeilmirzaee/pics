import React from 'react';

export default class Password extends React.Component {
  state = {password: ''}

  render() {
    return (
      <>
        <div className='ui container'>
          <div className='ui input left icon big'>
            <input type='text' placeholder='Password' value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} />
            <i className='icon teal lock'></i>
          </div>
          <div className='teal text'>{this.state.password.length < 4 ?  'Please provide at least 4 characters.':''}</div>
        </div>
      </>
    )
  }
}