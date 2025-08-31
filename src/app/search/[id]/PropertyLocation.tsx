"use client";

import { useSingleProperty } from "@/redux/hook";
// import { useGetPropertyQuery } from "@/state/api";
import { PropertyDetailsProps } from "@/types";
import { Compass, MapPin } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

// PropertyDetailsProps
const PropertyLocation = ({ propertyId }: PropertyDetailsProps) => {
  // const { data: property } = getSingleProperty(propertyId);
  const { data: property, isLoading } = useSingleProperty(propertyId);
  const mapContainerRef = useRef(null);

  const coordinatesInfoOne = property?.location?.coordinates?.coordinates?.[0];
  const coordinatesInfoTwo = property?.location?.coordinates?.coordinates?.[1];

  useEffect(() => {
    if (
      isLoading ||
      coordinatesInfoOne === undefined ||
      coordinatesInfoTwo === undefined ||
      !property
    )
      return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current!, // container id
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // style URL
      center: [
        coordinatesInfoOne,
        coordinatesInfoTwo,
        // 90.3731, 23.7465,
      ],
      zoom: 14,
    });
    // const map = new mapboxgl.Map({
    //   container: mapContainerRef.current!,
    //   style: "mapbox://styles/majesticglue/cm6u301pq008b01sl7yk1cnvb",
    //   center: [-74.5, 40],

    //   zoom: 14,
    // });

    const marker = new maplibregl.Marker()
      .setLngLat([
        // 90.3731, 23.7465,
        coordinatesInfoOne,
        coordinatesInfoTwo,
      ])
      .addTo(map);

    const markerElement = marker.getElement();
    const path = markerElement.querySelector("path[fill='#3FB1CE']");
    if (path) path.setAttribute("fill", "#000000");

    return () => map.remove();
  }, [property, isLoading]);

  if (isLoading) return <>Loading...</>;

  return (
    <div className="py-16">
      <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
        Map and Location
      </h3>
      <div className="flex justify-between items-center text-sm text-primary-500 mt-2">
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-1 text-gray-700" />
          Property Address:
          <span className="ml-2 font-semibold text-gray-700">
            {property?.location?.address || "Address not available"}
          </span>
        </div>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            property?.location?.address || ""
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center hover:underline gap-2 text-primary-600"
        >
          <Compass className="w-5 h-5" />
          Get Directions
        </a>
      </div>
      <div
        className="relative mt-4 h-[300px] rounded-lg overflow-hidden"
        ref={mapContainerRef}
      />
    </div>
  );
};

export default PropertyLocation;
