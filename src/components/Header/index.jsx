import { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

import logo from '/manga-open-logo.png';

import SearchBar from '../SearchBar';
import AccountLink from '../AccountLink';
import NavMenu from '../NavMenu';

const Header = () => {

    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');

    const debouncedSave = useMemo(() => debounce(setSearch, 1000), [setSearch]);

    const handleChange = event => {
        const { value: nextValue } = event.target;
        setValue(nextValue);
        debouncedSave(nextValue);
    };


    return (
        <header className="flex text-white px-12 py-7 items-center justify-between bg-(--tertiary-color)">
            <div className="flex gap-12 items-center">
                <img
                    src={logo}
                    alt="Logo do Mangá Open"
                    className="w-20 rounded-full"
                />
                <NavMenu />
            </div>
            <SearchBar
                placeholder="Digite o que você procura"
                onChange={handleChange}
                value={value}
            />
            <AccountLink />
        </header>
    );
}

export default Header;