import React from "react";
import Header from "./Header"
import Card from "./Card"
import info from "./data.js"

export default function App(){

const cardElement = info.map(data => {
    return (
        <Card 
            key = {data.id}
            info = {data}
        />
    )
})

    return (
        <div>
            < Header/>
            {cardElement}
        </div>
    )
}