import "./App.css";
import React from 'react';
import Page from "./components/Page";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={ <Page/>}></Route>
          <Route path="/" element={ <About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
