<template>    
    <div>
      <VueZoomer
        ref="zoomer"
        style="width: 100vw; height: 100vh; border: solid 1px silver"
        :aspect-ratio="imageAspectRatio"
        :max-scale="10"
        :zooming-elastic="false"
        v-model:zoomed="zoomed"
      >
        <img
          :src="'/src/assets/images/'+src"
          style="object-fit: contain; width: 100vw; height: 100%"
          @load="onImageLoad"
        />
      </VueZoomer>
    </div>
    <div class="zoom-group">
        <v-card class="zoomitem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="24px"><path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"/></svg></v-card>
        <v-card class="zoomitem"><v-icon icon="mdi-printer" /></v-card>
        <br />
        <v-card class="zoomitem" @click="zoomPlus"><v-icon icon="mdi-plus" /></v-card>
        <v-card class="zoomval">{{percent}}%</v-card>
        <v-card class="zoomitem" @click="zoomMinus"><v-icon icon="mdi-minus" /></v-card>
    </div>
</template>
<script lang="ts">

import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import VueZoomer from "./vue-zoomer.vue";

export default {
    name: "Zoom",
    components: {
      VueZoomer,
    },
    data () {
        return {
            percent: 100,
            drawer: true,
            items: [
              {
                title: "Accolade",
                value: "CEEA3A26-BE39-4E33-ADFE-091167F8E12F.jpg",
              },
              {
                title: "Affinity",
                value: "50017383-B6A0-48C4-B040-643F9D8B451F.jpg",
              },
              { title: "Allure", value: "A7BDA6BA-7BB7-4B0C-93F2-B2B44445FFFD.jpg" },
              { title: "Apex", value: "BB6FB45D-6CF3-48CA-B19B-E8D0DB0F4F77.jpg" },
              { title: "Ascend", value: "DCBA1B5C-6F9B-4ECD-AA72-19115704BF56.jpg" },
              { title: "Aspire", value: "D45CDAA1-8AE3-4E85-A288-4266DF2C2D17.jpg" },
              { title: "Asset", value: "CEEA3A26-BE39-4E33-ADFE-091167F8E12F.jpg" },
              {
                title: "Assurance",
                value: "E6A9FAEA-2E8F-49E9-9978-D04A5BA25C78.jpg",
              },
              { title: "Atlas", value: "F0A6F649-15B8-4B8F-89A1-8F5AE5831FE2.jpg" },
              { title: "Gadenia", value: "F49F7E29-92BE-4593-88A6-B8BA445197FE.jpg" },
            ],
            rail: false,
            zoomed: false,
            imageAspectRatio: 1
        }
    },
    methods: {
      onImageLoad(e) {
        const img = e.target;
        this.imageAspectRatio = img.naturalWidth / img.naturalHeight;
      },
      zoomPlus() {
        this.$refs.zoomer.zoomIn();
        this.percent += 25;
      },
      zoomMinus() {
        this.$refs.zoomer.zoomOut();
        this.percent -= 25;
      },
    },
    setup() {
      const store = useStore();
      const percent_store = computed(() => {
        return store.getters.percent
      });
      const zoomin = (event) => {
        if(store.getters.percent === 0){
            return;
        }
        store.commit('zoominPercent')
      }
      const src = computed(() => {
        return store.getters.src;
      });
      const zoomout = (event) => {
        store.commit('zoomoutPercent')
      }
      return {
        percent_store,
        zoomin,
        zoomout,
        src
      }
    }
}
</script>
<style>
.zoom-group {
    position: absolute;
    left: 20px;
    bottom: 20px;
}
.zoomitem {
  justify-content: center;
  align-items: center;
  display: block;
  height: 36px;
  width: 36px;
  line-height: 36px;
  cursor: pointer;
  text-align: center;
  border-radius: 0;
  font-size: 1.3rem;
}
.zoomitem:hover {
    background-color: gainsboro;
}
.zoomval {
  display: block;
  height: 36px;
  width: 36px;
  line-height: 36px;
  cursor: pointer;
  text-align: center;
  border-radius: 0;
  font-size: .6rem;
  background-color: darkturquoise;
  color: white;
}
</style>
