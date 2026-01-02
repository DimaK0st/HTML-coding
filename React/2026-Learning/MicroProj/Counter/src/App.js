import './index.scss';
import React from "react";

function App() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount((count)=> ++count);
    }

    const decrement = () => {
        setCount((count)=> --count);
    }

    return (
        <div className="App">
            <div>
                <h2>Счетчик:</h2>
                <h1>{count}</h1>
                <button className="minus" onClick={decrement}>- Минус</button>
                <button className="plus" onClick={increment}>Плюс +</button>
            </div>
        </div>
    );
}

export default App;
