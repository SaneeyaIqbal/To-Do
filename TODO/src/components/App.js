import React from 'react';
import TodoList from "./TodoList.js";
import Login from "./Login.js";
import Provider from "./index.js";
import Home from './Home.js';


function App() {
  return (
    <div className="App">
      <Provider />
      <TodoList />
      <Login />
      <Home />
    </div>
  );
}

export default App;
