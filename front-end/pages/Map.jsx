import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import { NextPage } from "next";
import { useMemo } from "react";
import styles from "../styles/Home.module.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Map = () => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyClwDKfzGV_7ICoib-lk2rH0iw5IlKW5Lw",
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.sidebar}>
        <p>This is Sidebar...</p>
        <GooglePlacesAutocomplete
          selectProps={{
            // value,
            onChange: (e) => console.log(e),
          }}
          apiKey="AIzaSyClwDKfzGV_7ICoib-lk2rH0iw5IlKW5Lw"
        />
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "800px", height: "800px" }}
        onLoad={() => console.log("Map Component Loaded...")}
      >
        <div
          lat={Number(mapCenter.lat)}
          lng={Number(mapCenter.lng)}
          className="bg-red-800 w-[50px] h-[50px]"
        >
          Hello
        </div>
      </GoogleMap>
    </div>
  );
};

export default Map;
