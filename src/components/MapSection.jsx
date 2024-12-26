import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapSection = () => {
  return (
    <div className="w-full overflow-hidden mt-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3">Hotex Location</h1>
        <p className="text-md font-light w-[60%] mx-auto mb-6">"Explore the perfect location for your upcoming stay with us. Enjoy stunning views, top-notch amenities, and the best local landmarks right at your doorstep. Check out our map and start planning your trip now!"</p>
      </div>
      <div className="map-container w-[80%] mx-auto h-[400px] sm:h-[500px] lg:h-[400px]">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{width:"100%", height:"100%"}}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;
