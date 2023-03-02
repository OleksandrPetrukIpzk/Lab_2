import './style.css'

export const Popup = ({active, setActive}) =>{

    return(<div  className={active ? 'modal active' : 'modal'} >
        <div className= {active ? 'modal__active active' : 'modal__active'} onClick={(e)=> e.stopPropagation()}>
        <h2>We need your consent to proceed</h2>
        <p>
            By clicking on the "Accept" button you consent to the usage of 1st and 3rd party
            cookies (or similar) in order to enhance your overall web browsing experience,
            measure our audience, collect useful information to allow us and our partners to
            provide you with ads tailored to your interests. Learn more on our<a href='https://app.bristlr.com/terms'> privacy notice </a>
            and <a href='https://app.bristlr.com/terms'> cookie </a> policy and set your preferences by clicking or at any time by
            clicking on the "Privacy settings” link on our website.
        </p>
            <input type='checkbox' placeholder=''/> <label>I want use my location</label>
            <br/>
            <input type='checkbox' placeholder=''/> <label>I want use my personal information</label>
        <hr/>
        <div><button onClick={() => setActive(false)}>Decline</button> <button onClick={() => setActive(false)}>Accept</button></div>
        </div>
    </div>)
}