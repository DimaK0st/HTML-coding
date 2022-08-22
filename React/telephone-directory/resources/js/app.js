// app.js

import Header from "./components/headerAndFooter/Header";

require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";

import Home from './components/page/home/Home';
import CreateItem from './components/CreateItem';
import Footer from "./components/headerAndFooter/Footer";
import Page404 from "./components/page/404/Page404";

console.log('asdfasd')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header/>
            <Router>

                <Routes>
                    <Route path="/phone/:number" element={<Home/>}/>
                    <Route path="/add-item" element={<CreateItem/>}/>
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
        <Footer/>
    </>
);

