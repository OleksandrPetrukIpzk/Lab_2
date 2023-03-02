import {Search} from "../Search/Search";
import {useState} from "react";
import {Information} from "../Information/Information";
import './style.css'
import {Popup} from "../Popup/Popup";
export const Main = () =>{

    const [city, setCity] = useState('Klitenka');
    const [active, setActive] = useState(true);
    return(

        <div>
        <Search setCity={setCity}/>
        <Information city={city}/>
            <Popup active={active} setActive={setActive}/>
    </div> )
}