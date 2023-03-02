import {useEffect, useState} from "react";
import axios from "axios";
import Moment from "react-moment";

export const Information = ({city}) => {
    const [status, setStatus] = useState();
    const [isError, setIsError] = useState(false);
    const api = {
        key: 'adfab55093cef69676f44ea3b8d622f0',
        baseURL: 'http://api.openweathermap.org/data/2.5/weather?q='
    }
    const bodyElement = document.getElementsByTagName('body')[0];
    Moment.globalFormat = 'D MMMM YYYY';
    useEffect(() => {
        axios.get(`${api.baseURL}${city}&units=metric&APPID=${api.key}`).then(response => {
            setStatus(response.data)
            setIsError(false);
        }).catch(() => setIsError(true))
        if (Math.round(status?.main.temp) >= 20) {
            bodyElement.className = "hot";
        } else if (Math.round(status?.main.temp) < 20 && Math.round(status?.main.temp) >= 15) {
            bodyElement.className = "normal";
        } else if (Math.round(status?.main.temp) < 15 && Math.round(status?.main.temp) >= 10) {
            bodyElement.className = "windy";
        } else if (Math.round(status?.main.temp) < 10 && Math.round(status?.main.temp) >= 5) {
            bodyElement.className = "autumn";

        } else if (Math.round(status?.main.temp) < 5 && Math.round(status?.main.temp) >= 0) {
            bodyElement.className = "cold";
        } else if (Math.round(status?.main.temp) < 0) {
            bodyElement.className = "winter";
        }


    }, [city, status])
    return (<div className='info'>
        <h1>{isError ? city + " not found" : city}</h1>
        {isError ? '' : <Moment>{Date()}</Moment>}
        <div className='number'><p>{isError ? '' : Math.round(status?.main.temp) + ' ℃'} </p></div>
        <h2>{isError ? '' : status?.weather[0].description}</h2>
    </div>)
}