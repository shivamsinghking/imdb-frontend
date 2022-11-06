import React from 'react';
import { Routes, Route } from 'react-router'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/header';
import MovieContainer from './components/movieContainer'
import CreateMovie from './components/movieContainer/createMovie';

function App() {
  return (
    <div className="App">
    <Header />
     <Routes>
        {/* // HINT -> exact means when you are hitting "/auth" then => / + /auth -> it is understood that "/" is hitted not "/auth"
        to avoid this we use exact that when exact this "/" path is hitted nothing added in it then show Default component */}
        <Route extact path="/" element={<MovieContainer />}></Route>
        <Route path="/movies/create" element={<CreateMovie />}></Route>
      </Routes>
      <ToastContainer autoClose={5000}  />
    </div>
  );
}

export default App;
