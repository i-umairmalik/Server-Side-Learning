import React from 'react';
import axios from 'axios';
import Link from 'next/link';
class Index extends React.Component {
  static async getInitialProps() {
    var promise = axios
      .get('http://localhost:4000/sessions')
      .then((response) => {
        return {
          hasErrored: false,
          sessionsData: response.data,
        };
      })
      .catch((error) => {
        return {
          hasErrored: true,
          message: error.message,
        };
      });
    return promise;
  }

  constructor(props) {
    super(props);
    this.state = {
      hasErrored: props.hasErrored,
      message: props.message,
      sessionsData: props.sessionsData,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        {this.state.sessionsData.map((session) => (
          <li key={session.id}>
            {session.title} {session.id}
          </li>
        ))}
      </ul>
    );
  }
}

export default Index;
