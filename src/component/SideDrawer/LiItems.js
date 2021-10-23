import { NavLink} from 'react-router-dom';
import './LiItems.css'

const LiItems = ({Icon,classes,text,click,path}) => {
    // const clicker=(e)=>{
    //     // e.preventDefault()
    // }
    
    return (
        <NavLink to={path} onClick={click}  >
            <Icon fontSize="large" className={classes}/>
            <span className="MenuItems" >{text}</span>
          </NavLink>

    );
};


export default LiItems;