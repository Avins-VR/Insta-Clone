import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Suggestion from './Suggestion';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="feed">
        <Feed />
      </div>
      <div className="suggestions">
        <Suggestion />
      </div>
    </div>
  );
}

export default App;
