import React from 'react';
import Stars from "./rating/stars/Stars";

function Home(props) {
    {console.log('asdfasdf')}

    return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">AppDividend</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {/*{props.children}*/}
                </div>
                <Stars count={5}/>
                <Stars count={4}/>
                <Stars count={3}/>
                <Stars count={2}/>
                <Stars count={1}/>
            </div>
        )
}

export default Home;
