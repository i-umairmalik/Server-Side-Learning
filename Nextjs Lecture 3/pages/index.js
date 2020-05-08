import React from 'react';
import DigitalClock from '../src/DigitalClock';
import axios from 'axios';
class Index extends React.Component {
  static async getInitialProps() {
    return {
      time: new Date().toISOString(),
    };
  }
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState(() => {
      return {
        time: new Date().toLocaleString(),
      };
    });
  }

  compenentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // return React.createElement(
    //   'h1',
    //   { className: 'orange' },
    //   'React Timer is About to created ' + this.state.time
    // );
    return <DigitalClock time={this.state.time}></DigitalClock>;
  }
}

export default Index;
