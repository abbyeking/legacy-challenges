// import React, { Component } from 'react';
// // import CatIndex from './CatIndex';
 
// const CatList = () => {
//  return (
//    <div>
//      {this.props.breeds.map((cats,index) => <li key={index}>{cats}</li> )}
//    </div>

//  )
// }
 
// export default CatList;

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