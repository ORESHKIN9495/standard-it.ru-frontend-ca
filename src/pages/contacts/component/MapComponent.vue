<script setup lang="ts">
import ymap from '@/composables/yamp.json'
import { onMounted } from 'vue'

declare let ymaps3: any

onMounted(async () => {
  await ymaps3.ready

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3

  const coordinates = [44.479776, 48.776468]

  const map = new YMap(document.getElementById('map') as HTMLDivElement, {
    location: {
      center: coordinates,
      zoom: 18
    },

    mode: 'vector'
  })

  map.addChild(new YMapDefaultSchemeLayer(ymap))
  map.addChild(new YMapDefaultFeaturesLayer({}))

  const markerElement = document.createElement('img')
  markerElement.className = 'icon-marker'
  markerElement.src = './favicon.svg'

  map.addChild(new YMapMarker({ coordinates }, markerElement))
})
</script>

<template>
  <article>
    <div id="map" style="width: 100%; height: 600px"></div>
  </article>
</template>

<style lang="scss">
.icon-marker {
  height: 65px;
  position: relative;
  transform: translate(-50%, -50%);
  width: 65px;
  max-inline-size: initial;
}
</style>
