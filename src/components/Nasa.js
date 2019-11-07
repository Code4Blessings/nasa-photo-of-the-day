import React, { useState, useEffect } from "react";
import "./Nasa.css";
import axios from "axios";
import NasaCard from "./NasaCard";

const Nasa = () => {
    const [nasaData, setNasaData] = useState({});

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=myZKi01y3UKMuU88uLe090NyYe1XuQVJfQBhx7Bt")
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
            date={nasaData.date}
            title={nasaData.title}
            explanation={nasaData.explanation}
          />

      </div>

  );
}

export default Nasa;