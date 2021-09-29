import Avatar from './Avatar.js';
import './Navbar.css'

function Navbar(props) {
    return(
        <>
            <div className="Navbar">
                <h1 className="Header">Coverpool</h1>
                <Avatar signIn={props.signIn} auth={props.auth} provider={props.provider}/>
            </div>
            <hr></hr>
        </>
    )
}
export default Navbar;