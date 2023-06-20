import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'

//import Home from './pages/home/Home';
//import About from './pages/about/About';

import SideBar from './components/sidebar/SideBar';
import ThemeTemplates from './components/ThemingTemplate/ThemeTemplates';




import {
  Home,
  About,
  Contact,
  Gaming,
  //BlogPage,
  ProjectPage,
  ErrorPage,
}
from './pages'

const App = () => {
  return(
    <BrowserRouter>
     <SideBar />
     <ThemeTemplates />
      <Routes>
        <Route path= '/' element={<Home />}></Route>
        <Route path= '/about' element={<About/>}></Route> 
        <Route path= '/contact' element={<Contact />}></Route>  
        <Route path= '/gaming' element={<Gaming />}></Route> 
        <Route path= '/blog' element={<Home />}></Route> 
        <Route path= '/project' element={<ProjectPage />}></Route> 
        <Route path= '*' element={<ErrorPage />}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
