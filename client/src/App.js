import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store.js';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <TodoList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
