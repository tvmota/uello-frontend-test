import axios from "axios";

export async function getCoordinates() {
  try {
    const address = "Avenida Doutor Gastão Vidigal, 1132 Vila Leopoldina - São Paulo - SP";
    const results = await axios
      .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}&types=address`);
    const { data = {} } = results;
    const { features = [] } = data;
    return features[0];
  } catch (err) {
    return err;
  }
};
