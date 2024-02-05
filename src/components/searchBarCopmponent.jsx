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

        <form onSubmit={handleSubmit}
            sx={{ width: "200px", height: "70px", padding: "10px", borderRadius: "10px", border: "1px solid #ccc" }}>
            <input
                sx={{ width: "200px", height: "70px", padding: "10px", borderRadius: "10px", border: "1px solid #ccc" }}
                /* size={25}
                height={50} */
                name="search"
                placeholder="Search"
                className="search__input"
                type="text"
                onChange={handleSearchChange}
            />
        </form>

    )
}
export default SearchBar