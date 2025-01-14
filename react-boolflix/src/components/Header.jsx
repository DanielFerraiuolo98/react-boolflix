function Header() {
    return (
        <header>
            <div className="titolo">
                <h1>Boolflix</h1>
            </div>
            <div className="searchbar">
                <input type="search" name="search" id="search" />
                <button>Cerca</button>
            </div>
        </header>
    )
}

export default Header;