import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api" 


import TutorialsList from "./components/TutorialsList";


const App: React.FC = () => {
  // const render = (status: Status) => {
  //   return <h1>{status}</h1>;
  // };
  
  // const map = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
  // })

  // const mapRef = React.useRef<google.maps.MapType | null>(null);

  // const onLoad = (map: google.maps.Map<Element>): void => {

  // }


  return (
    <div className="logo">
      <nav className="navbar navbar-expand navbar-blue bg-white">
        <a href="/" className="navbar-brand">
          <img src="https://headhunter.kg/employer-logo/2471150.png" alt="" style={{width: '150px'}} />
        </a>
      </nav>
      <img src="./img/test.png" alt="" />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialsList/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
