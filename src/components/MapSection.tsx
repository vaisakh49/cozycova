import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "./MapSection.css";

// Define the props type
interface MapSectionProps {
  centerCoordinates: [number, number];
  zoomLevel: number;
  title: string;
  popupContent: string;
}

const MapSection: React.FC<MapSectionProps> = ({
  centerCoordinates,
  zoomLevel,
  title,
  popupContent,
}) => {
  return (
    <div className="map-section">
      <h4>{title}</h4>
      <div className="map-container">
        <MapContainer
          center={centerCoordinates}
          zoom={zoomLevel}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={centerCoordinates}
            icon={L.icon({ iconUrl: "/images/marker-icon.png" })}
          >
            <Popup>{popupContent}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;
