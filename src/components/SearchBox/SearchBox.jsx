const SearchBox = ({ filter, setFilter }) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={filter}
                placeholder="Enter name"
                onChange={e => setFilter(e.target.value)} />
        </div>
    );
}

export default SearchBox