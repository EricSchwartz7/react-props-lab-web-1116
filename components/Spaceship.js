import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className = "spaceship">
        <h2>{this.props.name}</h2>
        <h2>{this.props.speed}</h2>
        <h2>{this.props.hasRockets}</h2>
        <small>Colors: {this.props.colors.join(", ")}</small>
      </div>
    )
  }
}
Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}
// class Spaceship extends React.Component {
//   render() {
//     return (
//       <div className = "spaceship">
//         <h2>Hello World</h2>
//         <small>I'm small</small>
//       </div>
//     )
//   }
// }

module.exports = Spaceship;
