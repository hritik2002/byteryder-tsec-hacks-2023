import axios from "axios";

const url = "localhost:" + port + "/api/";

export const LoginUserFn = async (creds) => {
  try {
    const data = await axios.get(
      `http://localhost:8000/api/auth/getRoomsData`,
      {
        body: {
          ...creds,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/auth/getRoomsData`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "aa34ebda97msh564e46a26c54737p1731fajsn1719e451f11a",
        },
      }
    );

    console.log(data, "data");
    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};
