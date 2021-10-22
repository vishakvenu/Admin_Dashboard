// import React, { useEffect, useRef, useState } from 'react';
import Vere from '../../../assets/world.svg';
import './MapInDec.css';

const MapInDec = () => {
    // const [scaleHeight, setscaleHeight] = useState(28);
    // const [scaleWidth, setscaleWidth] = useState(330);

    // const mapref=useRef()
    // useEffect(() => {
    //     setscaleHeight(mapref.current.clientHeight)
    //     setscaleWidth(mapref.current.clientWidth)
    // }, []);

    // const increaser=()=>{
    //    setscaleHeight(prev=>prev+30)
    //    setscaleWidth(prev=>prev+30)
    // }

    // const decreaser=()=>{
    //     if(scaleHeight===300||scaleWidth===350){
    //     setscaleHeight(300)
    //     setscaleWidth(350)
    // }else{
    //     setscaleHeight(prev=>prev-30)
    //     setscaleWidth(prev=>prev-30)
    // }
// }
    return (
        <>
             <div id="#chart" className="worldMapWrapper">
           <img className="worldMapImg" src={Vere} alt="check" />
           </div>
           
        </>
    );
};


export default MapInDec;