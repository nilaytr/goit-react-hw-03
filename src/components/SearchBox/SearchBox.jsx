import css from './SearchBox.module.css'

const SearchBox = ({ filter, setFilter }) => {
    return (
        <div className={css.searchBox}>
            <p className={css.searchTitle}>Find contacts by name</p>
            <input
                type="text"
                value={filter}
                placeholder="Enter name"
                onChange={e => setFilter(e.target.value)} />
        </div>
    );
}

export default SearchBox