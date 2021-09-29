import propic from './defaultsmall.jpg'
import './Avatar.css'

function Avatar(props) {
    function handleClick() {
        props.signIn(props.auth, props.provider);
    }
    return(
        <img src={propic} className="Avatar" onClick={handleClick}/>
    );
}

export default Avatar;