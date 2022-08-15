// app.js

import Header from "./components/headerAndFooter/Header";

require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";

import Home from './components/home/Home';
import CreateItem from './components/CreateItem';
import Footer from "./components/headerAndFooter/Footer";

console.log('asdfasd')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header/>
        <React.StrictMode>
            <Router>

                <Routes>
                    <Route path="/:number" element={<Home/>}/>
                    <Route path="/add-item" element={<CreateItem/>}/>

                </Routes>
            </Router>
        </React.StrictMode>
        <Footer/>
    </>
);

