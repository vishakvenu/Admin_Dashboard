import SideDrawer from "./SideDrawer/SideDrawer";

const Backdrop = ({show,changer}) => {

    return (
        <div className={show?'show backdrop':'backdrop'} onClick={changer}>
         <SideDrawer changer={changer}/>
        </div>
    );
};


export default Backdrop;