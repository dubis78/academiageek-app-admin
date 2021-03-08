import React, {Component} from "react";
import FlipMove from 'react-flip-move';
import shuffle from 'lodash/shuffle';
import {Button, Col, Row} from "antd";

import Auxiliary from "../../../util/Auxiliary";

const customEnterAnimation = {
  from: {transform: 'scale(0.5, 1)'},
  to: {transform: 'scale(1, 1)'}
};

class Shuffles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.sortRotate = this.sortRotate.bind(this);
    this.sortShuffle = this.sortShuffle.bind(this);
  }

  sortShuffle() {
    this.setState({
      sortingMethod: 'shuffle',
      products: shuffle(this.state.products)
    });
  }

  sortRotate() {
    const products = this.state.products.slice();
    products.unshift(products.pop());
    this.setState({
      products
    });
  }


  render() {
    return (
      <Auxiliary>
        <div>
          <Button onClick={this.sortShuffle}>Shuffle</Button>
          <Button onClick={this.sortRotate}>Rotate </Button>
        </div>
        <FlipMove
          staggerDurationBy="30"
          duration={500}
          enterAnimation={customEnterAnimation}>
          <Row>
          
          </Row>
        </FlipMove>
      </Auxiliary>
    );
  }
}

export default Shuffles;


