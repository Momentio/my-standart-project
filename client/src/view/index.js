import React, { Component } from 'react';
import { Provider } from "react-redux";
import Main from '../components/Main';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Provider store={this.props.store}>
        <Main>
          <h1>Goodbye, world...</h1>
        </Main>
      </Provider>
    );
  }
}

export default App;