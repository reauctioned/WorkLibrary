import React from "react";

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="main--container">

            <img src={`${props.img}`} alt={props.title} className="img" />
            </div>
            <div className="info">
                <div className="location">

            <h6 className="location">{props.location}</h6>
                </div>
            
            <h2 className="title">{props.title}</h2>
            <h6 className="date">{props.startDate}</h6>
            <p className="description">{props.description}</p>
            </div>
            
        </div>
        
    );
}
