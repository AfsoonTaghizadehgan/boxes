

import React from "react"
import Box from "./Components/Box"
import boxes from './boxes'

import './App.css';

//App funtion with toggle function inside to change the BOX background color when clicked
export default function App() {
    const [box, setBox]= React.useState(boxes)

    function toggle(id){
        setBox(prevOn => {
            const newBoxArray=[]
            prevOn.forEach(element => {
                if(element.id === id){
                    const updatedBox={
                        ...element,
                        on: !element.on
                    }
                    newBoxArray.push(updatedBox)
                }
                else{
                    newBoxArray.push(element)
                }
            });
            return newBoxArray
        })
    }

    const boxArray=box.map(items =>(
         <Box 
            id={items.id}
            on={items.on}
            keys={items.id}
            toggle={toggle}
            />
    )
    )
    return (
        <div className="App">
            
            {boxArray}
        </div>
    )
}