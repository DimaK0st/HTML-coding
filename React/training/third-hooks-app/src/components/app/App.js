import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {MainPage, ComicsPage, SingleComicPage} from "../pages";
import {createContext, lazy, Suspense} from "react";
import SingleCharacterLayout from "../pages/singleCharacterLayout/SingleCharacterLayout";
import SinglePage from "../pages/SinglePage";
import SingleComicLayout from "../pages/singleComicLayout/SingleComicLayout";

const Page404 = lazy(() => import('../pages/404'))

const dataContext = createContext()

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<span>Loading</span>}>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='/comics' element={<ComicsPage/>}/>
                            <Route path='/comics/:comicId' element={<SingleComicPage/>}/>
                            <Route path="/comics/:id"
                                   element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                            <Route path="/characters/:id"
                                   element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
                            <Route path='*' element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;
