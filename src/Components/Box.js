

import React from "react"
import '../App.css';

//Box component with different color on the back ground based on the on propery of the box in boxes.js
export default function Box(props) {
    
    const styles={
        backgroundColor: props.on ? "#222222": "transparent"
    }

    return (
       <div className="boxes" style={styles} key={props.keys} onClick={()=> props.toggle(props.id)}></div>
    )
}