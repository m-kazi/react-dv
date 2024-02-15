import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "One half pound of Cocoa",
        },
        {
            id: 2,
            checked: false,
            item: "Item 2",
        },
        {
            id: 3,
            checked: false,
            item: "Item 3",
        },
    ]);

    // state management for the new item add
    const [newItem, setNewItem] = useState("");

    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        localStorage.setItem("shoppionglist", JSON.stringify(listItems));
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem("shoppionglist", JSON.stringify(listItems));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div className="App">
            <Header title="Grocery List" />
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <Content
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            <Footer length={items.length} />
        </div>
    );
}

export default App;
