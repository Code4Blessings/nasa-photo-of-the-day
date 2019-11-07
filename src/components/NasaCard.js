import React from "react";

const NasaCard = (props) => {
    const { date, title, explanation} = props;
    return (
        <div className="nasa-card">
            <h2>Title: {title}</h2>
            <p>Date: {date}</p>
            <p>Explanation: {explanation}</p>
        </div>
    );
}

export default NasaCard;