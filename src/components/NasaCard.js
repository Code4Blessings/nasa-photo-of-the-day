import React from "react";
import styled from "styled-components";

const ImgCover = styled.img`
    width: 50%;
    height: 500px;
    margin-top: 80px;
`;

const NasaH2 = styled.h2`
    margin-top: 70px;
`;

const NasaP = styled.p`
     width: 75%;
    height: auto;
    margin: 0 0 50px 250px;
    font-size: 20px;
`;

const NasaCard = (props) => {
    const { image, date, title, explanation} = props;
    return (
        <div className="nasa-card">
            <ImgCover src={image} alt="stars"/>
            <NasaH2>Title: {title}</NasaH2>
            <NasaP>Date: {date}</NasaP>
            <NasaP>Explanation: {explanation}</NasaP>
        </div>
    );
}

export default NasaCard;