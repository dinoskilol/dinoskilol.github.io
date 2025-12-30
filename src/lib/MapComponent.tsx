import { MapContainer, TileLayer, Marker, Popup, AttributionControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon in Leaflet with Vite/Webpack
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import muehlbauerIconUrl from '../assets/muehlbauer.svg';
import universityIconUrl from '../assets/university.svg';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

const MuehlbauerIcon = L.icon({
  iconUrl: muehlbauerIconUrl,
  shadowUrl: iconShadow,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  shadowSize: [41, 41]
});

const UniversityIcon = L.icon({
  iconUrl: universityIconUrl,
  shadowUrl: iconShadow,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapComponent() {
  // Mühlbauer Automation GmbH, Roding coordinates
  const muehlbauer: [number, number] = [49.1983, 12.5256] 
  // Universität Regensburg coordinates
  const universitaetsregensburg: [number, number] = [48.9983, 12.0944]

  // Center between the two locations
  const centerPosition: [number, number] = [49.1283, 12.32]

  return (
    <MapContainer 
      center={centerPosition} 
      zoom={9} 
      scrollWheelZoom={false} 
      attributionControl={false}
      style={{ 
        height: '100%', 
        width: '100%', 
        minHeight: '200px', 
        borderRadius: '12px',
        zIndex: 0 
      }}
    >
      <AttributionControl prefix={false} position="bottomright" />
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={muehlbauer} icon={MuehlbauerIcon}>
        <Popup>
          3-year Software Developer internship at Mühlbauer Automation GmbH, Roding. <br />
          Started August 2023, ended August 2026.<br />I learned the basics of software development following the IHK Rahmenplan, mainly using C#, React, and TypeScript.
        </Popup>
      </Marker>
      <Marker position={universitaetsregensburg} icon={UniversityIcon}>
        <Popup>
          1 week Software Developer practice at Rechenzentrum der Universität Regensburg.<br />
          I learned the basics of HTML, CSS, Javascript development.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
