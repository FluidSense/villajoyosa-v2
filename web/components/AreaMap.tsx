import { FC, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Amenity, MapPosition } from "../types/local";

// -- Hack to get icons to load correctly https://github.com/PaulLeCam/react-leaflet/issues/453
let DefaultIcon = L.icon({
  //@ts-ignore
  iconUrl: icon.src,
  iconAnchor: [9, 44],
  //@ts-ignore
  shadowUrl: iconShadow.src,
});

L.Marker.prototype.options.icon = DefaultIcon;

// -- Hack end
type Props = {
  amenities?: Amenity[];
};

const AreaMap: FC<Props> = (props) => {
  const { amenities } = props;
  return (
    <MapContainer
      center={[38.508395, -0.228772]}
      zoom={17}
      scrollWheelZoom={false}
      style={{ width: "auto", height: "30vh" }}
      dragging={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {amenities?.map((amenity) => (
        <Marker
          position={[amenity.position.lat, amenity.position.lng]}
          key={`marker-${amenity._id}`}
        >
          <Popup>{amenity.display.text}</Popup>
        </Marker>
      ))}
      <Marker position={[38.508395, -0.228772]}>
        <Popup>Leiligheten</Popup>
      </Marker>
    </MapContainer>
  );
};

export default AreaMap;
