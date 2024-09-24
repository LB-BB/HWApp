import React, { Component } from 'react';
import { Text } from 'react-native';

class MyText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: this.props.keyWord + ' & Alligators',
    };
  }
  componentDidMount() {
    console.log('Component has been mounted');
  }

  componentDidUpdate(prevState) {
    console.log('The state of the application has been changed', prevState, this.state);
  }

  componentWillUnmount() {
    console.log('Component is now being destroyed.');
  }

  render() {
    return(
      <Text onPress={() => {
        this.setState({...this.state, ...{keyWord: this.props.keyWord + ' & Seals'}});
      }}>{this.props.keyWord} are great, but it's even better to combine {this.state.keyWord}.</Text>
    );
  }
}

export default MyText;
