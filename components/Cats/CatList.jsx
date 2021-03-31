
import React, { Component } from 'react';

class CatList extends Component { 
  render() {
    return (
      <div>
        {this.props.breeds.map((cat, index) => <li key={index}>{cat}</li>)}
      </div>
    )
  }
}

export default CatList;