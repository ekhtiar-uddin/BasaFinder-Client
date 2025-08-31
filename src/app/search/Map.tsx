"use client";
import { useAppSelector } from "@/redux/hook";
import { IProperty } from "@/types";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

const Map = ({ properties }: { properties: IProperty[] }) => {
  const mapContainerRef = useRef(null);
  const filters = useAppSelector((state) => state.global.filters);
  // const { data: properties, isLoading, isError } = useAllProperties();

  useEffect(() => {
    if (!properties) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // style URL
      center: filters?.coordinates || [90.3731, 23.7465],
      zoom: 5,
    });

    properties.forEach((property) => {
      const marker = createPropertyMarker(property, map);
      const markerElement = marker.getElement();
      const path = markerElement.querySelector("path[fill='#3FB1CE']");
      if (path) path.setAttribute("fill", "#000000");
    });

    map.on("load", () => {
      if (properties?.length === 1) {
        const [lng, lat] = properties[0]?.location?.coordinates?.coordinates;
        map.flyTo({
          center: [lng, lat],
          zoom: properties?.length > 1 ? -5 : 10,
          speed: 1.6,
        });
      } else {
        map.flyTo({
          center: filters?.coordinates || [90.3731, 23.7465],
          zoom: 10,
          speed: 1.7,
        });
      }
    });

    // console.log("now", properties);

    const resizeMap = () => {
      if (map) setTimeout(() => map.resize(), 700);
    };
    resizeMap();

    return () => map.remove();
  }, [properties, filters.coordinates]);

  // if (isLoading) return <>Loading...</>;
  if (!properties) return <div>Failed to fetch properties</div>;

  return (
    <div className="basis-8/12 xl:h-full 2xs:h-[65vh]  grow relative rounded-xl">
      <div
        className="map-container rounded-xl"
        ref={mapContainerRef}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

const createPropertyMarker = (property: IProperty, map: maplibregl.Map) => {
  // console.log("lat", property?.location?.coordinates?.coordinates?.[0]);
  // console.log('pro',)

  const marker = new maplibregl.Marker()
    .setLngLat([
      property?.location?.coordinates?.coordinates?.[0],
      property?.location?.coordinates?.coordinates?.[1],
      // 90.3731, 23.7465,
    ])
    .setPopup(
      new maplibregl.Popup().setHTML(
        `
        <div class="marker-popup">
          <div class="marker-popup-image"></div>
          <div>
            <a href="/search/${property?._id}" target="_blank" class="marker-popup-title">${property?.name}</a>
            <p class="marker-popup-price">
              $${property?.price}
              <span class="marker-popup-price-unit"> / month</span>
            </p>
          </div>
        </div>
        `
      )
    )
    .addTo(map);
  return marker;
};

export default Map;
