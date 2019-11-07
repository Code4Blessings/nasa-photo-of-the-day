import React from "react";
import styled from "styled-components";

const NasaCard = (props) => {
    const { image, date, title, explanation} = props;
    return (
        <div className="nasa-card">
            <img className="img-cover" src={image} alt="stars"/>
            <h2>Title: {title}</h2>
            <p>Date: {date}</p>
            <p>Explanation: {explanation}</p>
        </div>
    );
}

export default NasaCard;