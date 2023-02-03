import axios from "axios";
const port = 8000;

const url = "localhost:" + port + "/api/";

export const LoginUserFn = async (creds) => {
  try {
    const data = await axios.post(`http://localhost:8000/api/auth/login`, {
      ...creds,
    });

    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};

export const getLocationDataFn = () => {};

// sends all the data
export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/auth/getRoomsData`
    );

    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};

export const getUserById = async (id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/auth//getoneprofile`,
      {
        id,
      }
    );

    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};

export const getAllUser = async (id) => {
  try {
    const { data } = await axios.post(`http://localhost:8000/api/auth/aluser`);
    console.log("inside getAllUser: ", data);
    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};
