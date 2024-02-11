import React from "react";
import { useState } from "react";

const Content = () => {
    const [name, setName] = useState("Tanim");

    const handleNameChange = () => {
        const names = ["Kevin", "Kazi", "John"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    };

    const handleClick = () => {
        console.log("Clicked");
    };

    // Passing the param
    const handleClick2 = (name) => {
        console.log(`${name} clicked!`);
    };

    //event capuring
    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    };

    return (
        <main>
            <p>Hello {name}</p>
            <p>Hello2 {name}</p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={() => handleClick2("Kazi")}>Click It</button>
            <button onClick={(e) => handleClick3(e)}>Click Event</button>
        </main>
    );
};

export default Content;
