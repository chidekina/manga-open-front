import { useState, useMemo } from 'react';
import { NavLink } from "react-router-dom";
import debounce from 'lodash.debounce';

import logo from '/manga-open-logo.png';

import SearchBar from '../SearchBar';

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
        <header className="flex px-12 py-10 items-center justify-between bg-(--tertiary-color)">
            <div className='flex gap-12 items-center'>
                <img
                    src={logo}
                    alt="Logo do Mangá Open"
                    className='w-20 rounded-full'
                />
                <div className="flex gap-8 text-2xl">
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--primary-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150" to="/">
                        Home
                    </NavLink>
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--primary-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150" to="/about">
                        Sobre
                    </NavLink>
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--primary-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150" to="/mangas">
                        Mangás
                    </NavLink>
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--primary-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150" to="/contacts">
                        Contatos
                    </NavLink>
                </div>
            </div>
            <SearchBar
                placeholder="Digite o que você procura"
                onChange={handleChange}
                value={value}
            />
        </header>
    );
}

export default Header;