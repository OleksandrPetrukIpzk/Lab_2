import {useState} from "react";

export const Search = ({ setCity}) =>{
    const [search, setSearch] = useState('');

    const handleChange = (value) =>{
        setSearch(value);
    }
    const handleClick = () =>{
        setCity(search);

    }
    return(<div className='search'>
        <input type='text' placeholder='search' onChange={(e) => handleChange(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
    </div>)
}