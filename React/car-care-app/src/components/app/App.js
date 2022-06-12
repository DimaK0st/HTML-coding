import MainContent from '../pages/mainContent/mainContent'
import AppHeader from "../appHeader/AppHeader";
import Page404 from '../pages/404'
import './App.css';
import {React, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import RequireAuth from "../../hoc/RequireAuth";

function App() {
    const auth= true

  return (
      <Router>
        <div className="app">
          <AppHeader/>
          <main>
            <Suspense fallback={<span>Loading</span>}>
                <Routes>
                    <Route path='/login' element={<MainContent typeForm='login'>mainPage</MainContent>}/>
                    <Route path='/register' element={<MainContent typeForm='register'>mainPage</MainContent>}/>
                    <Route path='/forgot' element={<MainContent typeForm='forgot'>mainPage</MainContent>}/>
                    <Route path='/home' element={<RequireAuth>
                        <MainContent>mainPage</MainContent>
                    </RequireAuth>}/>
                    <Route path='*' element={<MainContent>mainPage</MainContent>}/>
                </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
  );
}

export default App;
