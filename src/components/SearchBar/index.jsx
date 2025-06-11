const SearchBar = ({ placeholder, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="w-108 bg-white outline-none rounded-lg h-9 pr-10 bg-[url(src/assets/search-icon.svg)] bg-no-repeat bg-[position:right_0.8rem_center] bg-size-[22px] text-black px-4 focus:placeholder:text-transparent"
            onChange={onChange}
        />
    );
}

export default SearchBar;