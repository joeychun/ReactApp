import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Redirect, Switch } from 'react-router-dom';
import TodoList from './containers/TodoList/TodoList';
import TodoDetail from './components/TodoDetail/TodoDetail';
import NewTodo from './containers/TodoList/NewTodo/NewTodo';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/todos' exact element={<TodoList title='My TODOs!' />} />
        <Route path='/todos/:id' exact element={<TodoDetail />} />
        <Route path='/new-todo' exact element={<NewTodo />} />
        <Route path='/' element={<Navigate replace to='/todos' />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
