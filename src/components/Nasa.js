import React, { useState, useEffect } from "react";
import "./Nasa.css";
import axios from "axios";
import NasaCard from "./NasaCard";

const Nasa = () => {
    const [nasaData, setNasaData] = useState({});
    const ApiKey = "https://api.nasa.gov/planetary/apod?api_key=myZKi01y3UKMuU88uLe090NyYe1XuQVJfQBhx7Bt"

    useEffect(() => {
        axios
        .get(ApiKey)
        .then((response) => {
            setNasaData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log("Data returned an error", error);
        })
    },[])
    
   return (
      <div className="nasa-object">
        <NasaCard
            image={nasaData.hdurl}
            title={nasaData.title}
            date={nasaData.date}
            explanation={nasaData.explanation}
          />
      </div>

  );
}

export default Nasa;