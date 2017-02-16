import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  constructor(){
    super()

    this.state = {
      fontSize: "1px",
      left: "1px",
      top: "1px",
      big: false
    }
  }


  handleClick() {
    if (this.state.big === false){
      for (var i = 1; i < 100; i++){
        var ship = this
        log(ship, i)
      }
      this.setState({big: !this.state.big})
    } else if (this.state.big === true){
      for (i = 100; i > 0; i--){
        var ship = this
        rev(ship, i)
      }
      this.setState({big: !this.state.big})
    }
  }
  handleClick2() {
      for (var i = 1; i < 100; i++){
        var ship = this
        move(ship, i)
      }
  }



  render() {

    var pStyle = {
      fontSize: this.state.fontSize,
      left: this.state.left,
      top: this.state.top,
      margin: "1px",
      position: 'absolute'
    }

    var bStyle = {
      fontSize: "15px"
    }

    return (
      <div className = "spaceship">
        <button style={bStyle} onClick={this.handleClick.bind(this)}>{this.state.big ? 'Smaller' : 'Bigger'}</button>
        <div>
          <button style={bStyle} onClick={this.handleClick2.bind(this)}>Big with Movement</button>
        </div>
        {/* <h2>{this.props.name}</h2> */}
        <p style={pStyle}>Text</p>
        {/* <h2>{this.props.hasRockets}</h2>
        <small>Colors: {this.props.colors.join(", ")}</small> */}
      </div>
    )
  }
}

function log(ship, i) {
  setTimeout(function(){
    ship.setState({
      fontSize: `${(i * 5) + 20}px`,
      left: `${i + 100}px`
    })
  }, i * 16)
}

function rev(ship, i) {
  setTimeout(function(){
    ship.setState({
      fontSize: `${(i * 5) + 20}px`,
      left: `${i + 100}px`
    })
  }, (100 - (i - 1)) * 16)
}

function move(ship, i) {
  setTimeout(function(){
    ship.setState({
      fontSize: `${(i * 5) + 20}px`,
      left: `${i + 100}px`
    })
  }, i * 16)
  setTimeout(function(){
    ship.setState({
      left: `${(i * 5) + 200}px`
    })
  }, (i * 16) + 1800)
  setTimeout(function(){
    ship.setState({
      left: `${parseInt(ship.state.left) - (i * 5)}px`
    })
  }, (i * 16) + 3200)
}



Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
