// app.js

require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterList from "./RouterList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterList/>
    </>
);

