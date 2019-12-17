import React from 'react';
import TodoList from "./TodoList.js";
import Login from "./Login.js";
import Provider from "./index.js";
import Home from './Home.js';
import Signup from './Signup.js';


function App() {
  return (
    <div className="App">
      <Provider />
      <TodoList />
      <Signup />
      <Login />
      <Home />
    </div>
  );
}

export default App;
