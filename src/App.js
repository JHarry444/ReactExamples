import React from 'react';
import './App.css';
import AutoFilm from './loading_data/AutoFilm';
// import Converter from './Converter';
import Form from './forms/Form';
import DataSet from './datasets/DataSet';
import Routing from './routing/Routing';
// import LifeCycle from './Lifecycle';
// import Counter from './Counter';
// import Bee from './Bee';
// import Form from './Form copy';

class App extends React.Component {

  render() {
    return (
      <Routing/>
    );
  }
}

export default App;
