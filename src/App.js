import React from 'react';

import './App.css';
import Header from './components/header/header';
import TodoList from './components/todoList/todo-list';
import Footer from './components/footer/footer';

function App() {
    
  return (
    <div className="App">
      <div className='todo-app-container'>
        <Header />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
