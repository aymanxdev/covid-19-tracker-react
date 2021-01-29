import React, { useContext } from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import { AppContext } from "../ContextAPI/AppContext";
import { showDataOnMap } from "../helpers/util";
import "../assets/map.css";

function Map() {
  const { mapCenter, mapZoom, mapCountries, casesType } = useContext(
    AppContext
  );

  return (
    <div className="map">
      <LeafletMap
        countries={mapCountries}
        casesType={casesType}
        center={mapCenter}
        zoom={mapZoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(mapCountries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
