import { useState } from "react";
import { useGlobalContext } from "../Context/GlobalContext";

function Header() {
    const { search } = useGlobalContext();
    const [query, setQuery] = useState("");

    function handleInput(e) {
        setQuery(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault();
        search(query);
    }

    return (
        <header>
            <div className="titolo">
                <h1>Boolflix</h1>
            </div>
            <div className="searchbar">
                <input type="search" name="query" id="query" value={query} onChange={handleInput} />
                <button onClick={handleSearch}>Cerca</button>
            </div>
        </header>
    )
}

export default Header;