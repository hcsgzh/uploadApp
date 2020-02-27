import React from 'react';
import './App.css';
import Upload from './upload/Upload';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <div className="Card">
          <Upload />
        </div>
      </div>
    )
  }
}
export default App;
