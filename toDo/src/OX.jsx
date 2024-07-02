import { useState } from "react";
import Oxbox from "./Oxbox.jsx";


export default function OX(){
    const [arr,setnewarr]=useState([]);
    let arrr=new Array(3);
    for (let i = 0; i < arrr.length; i++) {
      arrr[i]=(crypto.randomUUID());
    }
    return (
        <>
        <div className="container">
            <Oxbox len={arrr} />
        </div>
        </>
    );
}