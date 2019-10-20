import React, { useEffect, useRef } from "react";
import "./App.css";
import { fromEvent } from "rxjs";

function App() {
    const buttonRef = useRef(null);
    useEffect(() => {
        const myObservable = fromEvent(buttonRef.current, "click");
        const subscription = myObservable.subscribe(event =>
            console.log(event)
        );
    }, []);
    return (
        <div className="App">
            <button ref={buttonRef}>Click me!</button>
        </div>
    );
}

export default App;
