import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

function Map({ mapCenter, setMarkerPosition }) {
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return mapCenter === null ? null : (
      <Marker position={mapCenter}>
        <Popup>موقعیت انتخاب شده</Popup>
      </Marker>
    );
  }
  return (
    <div className="h-48">
      <MapContainer
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={true}
    className="h-5/6 w-full pb-4"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
