import { ref } from "vue";
import { defineStore } from "pinia";
import { getCoordinates } from "../services/Location";

export const useLocationStore = defineStore("location", () => {
  const coordinates = ref({});

  async function setCoordinates () {
    try {
      const coords = await getCoordinates();
      const { geometry = {} } = coords;
      coordinates.value = {
        lat: geometry?.coordinates[1],
        lng: geometry?.coordinates[0],
      };
      return coordinates;
    } catch (err) {
      return err;
    }
  }

  return { coordinates, setCoordinates };
});
