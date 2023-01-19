<template>
  <div id="mapContainer" class="map__content">
    &nbsp;
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import mapboxgl from "mapbox-gl/dist/mapbox-gl"; // eslint-disable-line
  import { useLocationStore } from "@/stores/location";

  const locationStore = useLocationStore();

  onMounted(async () => {
    try {
      await locationStore.setCoordinates();

      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

      const map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v12?optimize=true",
        center: [
          locationStore.coordinates.lng,
          locationStore.coordinates.lat,
        ],
        zoom: 12,
      });

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-right");
      const marker = new mapboxgl.Marker()
        .setLngLat([
          locationStore.coordinates.lng,
          locationStore.coordinates.lat,
        ])
        .addTo(map);
      return Promise.resolve();
    } catch (err) {
      return err;
    }
  });
</script>

<style lang="scss">
.map {
  &__content {
    height: 100%;
    width: 100%;
    background-color: #cacaca;
  }
}
</style>
