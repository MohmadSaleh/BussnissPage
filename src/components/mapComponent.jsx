import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Typography from '@mui/material/Typography'

const Map = ({ cityName }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                // Use OpenCage Geocoding API to get coordinates for the city
                const response = await axios.get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=f38fef6256df4a809165a0fbce52317b`
                );

                const { lat, lng } = response.data.results[0].geometry;

                // Create a map centered at the city's coordinates
                const map = L.map(mapRef.current).setView([lat, lng], 13);

                // Add a tile layer
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: "© OpenStreetMap contributors",
                }).addTo(map);



                return () => {
                    map.remove();
                };
            } catch (error) {
                console.error("Error fetching coordinates:", error);
                return () => {
                    <Typography variant="h1" color="initial">Could not fint the place on the map</Typography>
                }
            }
        };

        if (cityName) {
            fetchCoordinates();
        }

    }, [cityName]);

    return <div ref={mapRef} style={{ height: "150px", width: "100%" }} />;
};

export default Map;
