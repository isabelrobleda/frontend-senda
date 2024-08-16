import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapaColegio = () => {
  const [map, setMap] = useState(null);

  const center = {
    lat: 19.33917205379341,
    lng: -99.21988774769969,
  };

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  useEffect(() => {
    if (map) {
      const marker = new window.google.maps.Marker({
        position: center,
        map,
        title: "My Marker",
      });
    }
  }, [map]);

  return (
    <>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{
            height: "538px",
            width: "1312px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
            margin: "30px auto",
          }}
          center={center}
          zoom={15}
          onLoad={onLoad}
        />
      </LoadScript>
      <div className="w-full py-16 md:py-32 flex flex-col justify-center items-center gap-8 md:gap-20">
        <div className="w-[1312px] flex flex-col md:flex-row justify-center items-start gap-8 md:gap-8">
          <div className="w-[1312px] md:w-[30%] h-auto relative">
            <img
              className="w-full  rounded-lg"
              src="src/assets/mapa/instalaciones.jpeg"
              alt="Mision"
            />
          </div>
          <div className="w-full md:w-[30%] relative">
            <img
              className="w-full  rounded-lg"
              src="src/assets/mapa/recepcion.jpeg"
              alt="Mision 01"
            />
          </div>
          <div className="w-full md:w-[30%] relative">
            <img
              className="w-full  rounded-lg"
              src="src/assets/mapa/laboratorio.jpeg"
              alt="Mision 01"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapaColegio;
