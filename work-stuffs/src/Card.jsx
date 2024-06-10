import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.img}`} alt={props.title} className="card-img" />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-location">{props.location}</p>
            <p className="card-date">{props.startDate}</p>
            <p className="card-description">{props.description}</p>
        </div>
    );
}
