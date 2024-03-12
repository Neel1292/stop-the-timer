import { useState, useRef } from "react";

export default function Player() {
    const palyerName = useRef()
    const [enteredPlayerName, setEnteredPlayerName] = useState(null);

    function handleClick() {
        setEnteredPlayerName(palyerName.current.value);
        palyerName.current.value = null;
    }

    return (
        <section id="player">
        <h2>Welcome { enteredPlayerName ?? "unknown entity"}</h2>
        <p>
            <input type="text" ref={palyerName} placeholder="Enter your Name" />
            <button onClick={handleClick}>Set Name</button>
        </p>
        </section>
    );
}
