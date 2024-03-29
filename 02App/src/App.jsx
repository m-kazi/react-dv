import Header from "./components/Header";
import SearchItems from "./components/SearchItems";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("shoppinglist")) || []
    );

    // state management
    const [newItem, setNewItem] = useState("");
    const [search, setSearch] = useState("");

    //will look into the items and save locally
    useEffect(() => {
        localStorage.setItem("shoppinglist", JSON.stringify(items));
    }, [items]);

    //ternary - id = if items, will grab the list by the end (-1) & increment
    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = {
            id,
            checked: false,
            item,
        };
        const listItems = [...items, myNewItem];
        setItems(listItems);
    };

    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        // console.log(newItem);
        addItem(newItem);
        setNewItem("");
    };

    return (
        <div className="App">
            <Header title="Grocery List" />
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItems search={search} setSearch={setSearch} />

            <Content
                items={items.filter((item) =>
                    item.item.toLowerCase().includes(search.toLowerCase())
                )}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            <Footer length={items.length} />
        </div>
    );
}

export default App;
