import { Link } from 'react-router-dom';
import './LiItems.css'

const LiItems = ({Icon,classes,text,click,path}) => {
    const clicker=(e)=>{
        // e.preventDefault()
    }
    
    return (
        <Link to={path} onClick={clicker}>
        <li onClick={click} className="LiItems">
            <Icon fontSize="large" className={classes}/>
            <span className="MenuItems" >{text}</span>
          </li>
          </Link>

    );
};


export default LiItems;