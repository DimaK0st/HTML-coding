// app.js

require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";

import Master from './components/Master';
import CreateItem from './components/CreateItem';

console.log('asdfasd')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <>Huila</>
    <React.StrictMode>
        <Router>

            <Routes>
                <Route path="/" element={<Master/>}/>
                <Route path="/add-item" element={<CreateItem/>}/>

            </Routes>
        </Router>
    </React.StrictMode>
);

