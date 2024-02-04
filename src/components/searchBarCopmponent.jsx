/* import { FontAwesomeIcon } from "@fontawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fontawesome/free-solid-svg-icons" */
import SearchContext from "../store/searchContext"
import { useContext } from "react"

const SearchBar = () => {
    const handleSubmit = (e) => e.preventDefault()
    const { setSearch } = useContext(SearchContext);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                    {/*   <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                </button>
            </form>
        </header>
    )
}
export default SearchBar