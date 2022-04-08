import React from "react";
import JP from "./images/Japan.png"
import Location from "./images/location.png"

export default function Card(props){
    return (
        <section className="card--container">
            <div className="card--image---subcontainer">
                <img className="card--image" src={props.info.imageUrl} alt="imagem do destino"/>
            </div>
            <div className="card--content---subcontainer">
                <div className="card--location---subcontainer">
                    {/* <img className="card--location---icon" src={Location}/> */}
                    <p className="card--location---country">{props.info.location}</p>
                    <a href={props.info.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--spot">{props.info.title}</h1>
                <div className="card--duration---subcontainer">
                    <p className="card--duration">{props.info.startDate} - </p>
                    <p className="card--duration"> {props.info.endDate}</p>
                </div>
                <p className="card--description">{props.info.description}</p>
            </div>
        </section>
    )
}