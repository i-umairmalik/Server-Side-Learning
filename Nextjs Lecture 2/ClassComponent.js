const ClassrootElement = document.getElementById('myClassComponent');

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleString(),
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
    return React.createElement(
      'h1',
      { className: 'orange' },
      'React Timer is About to created ' + this.state.time
    );
    //   return (
    //   <h1 className="orange">
    //     React Timer is About to created + this.state.time
    //   </h1>
    // );
  }
}

ReactDOM.render(React.createElement(Timer, {}, null), ClassrootElement);
