import React from "react";
import ReactDOM from "react-dom";
import Keys from "./components/keys/keys";
import './index.css';

const App = () => {

    const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];

    return (
        <div>
            <Keys keys={keys} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));