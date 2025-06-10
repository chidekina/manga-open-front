const SearchBar = ({ placeholder, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="w-96 bg-white outline-none rounded-lg h-9 bg-[url(src/assets/search-icon.svg)] bg-no-repeat bg-right bg-size-[25px] text-black px-4 focus:placeholder:text-transparent"
            onChange={onChange}
        />
    );
}

export default SearchBar;