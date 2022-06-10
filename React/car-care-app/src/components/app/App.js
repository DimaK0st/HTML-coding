import MainPage from '../pages/mainPage/MainPage'
import AppHeader from "../appHeader/AppHeader";
import Page404 from '../pages/404'
import './App.css';
import {React, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="app">
          <AppHeader/>
          <main>
            <Suspense fallback={<span>Loading</span>}>
              <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='*' element={<Page404/>}/>
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
  );
}

export default App;
