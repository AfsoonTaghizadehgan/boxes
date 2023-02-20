

import React from "react"
import Box from "./Components/Box"
import boxes from './boxes'

import './App.css';

//App funtion with toggle function inside to change the BOX background color when clicked
export default function App() {
    const [box, setBox]= React.useState(boxes)

    //we need to pass the id in order for react to know which box we have clicked, then change the on property to the opposite and pass all items to a new array
    function toggle(id){
        setBox(prevBox => {
            return prevBox.map((square) => {
                return square.id === id ? {...square, on:!square.on} : square
            })
        
        })
    }

    //after we click a box, the App will be rerendered, the box array is now changed to the newBoxArray from the toggle function, and the new format will be displayed
    const boxArray=box.map(items =>(
         <Box 
            id={items.id}
            on={items.on}
            keys={items.id}
            toggle={() => toggle(items.id)}
            />
    )
    )
    return (
        <div className="App">
            
            {boxArray}
        </div>
    )
}