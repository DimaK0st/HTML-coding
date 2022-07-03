import MainContent from '../pages/mainContent/mainContent'
import AppHeader from "../appHeader/AppHeader";
import Page404 from '../pages/404'
import './App.css';
import {React, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import RequireAuth from "../../hoc/RequireAuth";
import Home from "../pages/home/Home";
import Main from "../pages/main/Main";
import {useSelector} from "react-redux";

function App() {
    const authentication = useSelector(state => state.authentication)
    console.log('authentication',authentication)
    const auth = authentication.auth
    console.log('auth',auth)
    return (
        <Router>
            <div className="app">
                {/*<AppHeader/>*/}
                <main>
                    <Suspense fallback={<span>Loading</span>}>
                        <Routes>
                            <Route path='/login' element={<MainContent typeForm='login'><Main/></MainContent>}/>
                            <Route path='/register' element={<MainContent typeForm='register'><Main/></MainContent>}/>
                            <Route path='/forgot' element={<MainContent typeForm='forgot'><Main/></MainContent>}/>
                            <Route path='/home' element={<RequireAuth auth={auth}>
                                <MainContent><Home/></MainContent>
                            </RequireAuth>}/>
                            <Route path='/' element={<RequireAuth auth={auth}>
                                <MainContent><Main/></MainContent>
                            </RequireAuth>}/>
                            <Route path='*' element={<RequireAuth auth={auth}>
                                <MainContent><Page404/></MainContent>
                            </RequireAuth>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    );
}

export default App;
