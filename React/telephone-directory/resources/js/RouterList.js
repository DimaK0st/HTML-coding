import Header from "./components/headerAndFooter/Header";
import React from "react";
import {BrowserRouter, BrowserRouter as Router, Route, Routes,} from "react-router-dom";

import Home from './components/page/home/Home';
import Main from './components/page/main/Main';
import CreateItem from './components/CreateItem';
import Footer from "./components/headerAndFooter/Footer";
import Page404 from "./components/page/404/Page404";

function RouterList(props){
    return <Router >
        <Header/>
        <Routes>
            <Route path="/phone/:number" element={<Home/>}/>
            <Route path="/add-item" element={<CreateItem/>}/>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer/>

    </Router >
}

export default RouterList
