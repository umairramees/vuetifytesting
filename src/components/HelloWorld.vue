<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        location="right"
        class="navbar"
      >
        <v-list-item
          prepend-avatar="../assets/logo.svg"
          title="Various Plans Visualizer"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item v-for="(item, index) in items" v-bind:key="item.icon">
            <CheckBoxItem
              :value="item.value"
              :index="index"
              :subtitle="item.title"
            />
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <Zoom />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import CheckBoxItem from "./CheckBoxItem.vue";
import VueZoomer from "./vue-zoomer.vue";
import Zoom from "./Zoom.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { ref, onMounted } from "vue";

export default {
  name: "HelloWorld",
  components: {
    CheckBoxItem,
    Zoom,
    VueZoomer,
  },
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Accolade",
          value: "A03359C5-9C11-489B-B50E-19C8F0AD8950.jpg",
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
        { title: "Gadenia", value: "bedroom 2.jpeg" },
      ],
      rail: false,
      zoomed: false,
      imageAspectRatio: 1,
    };
  },
  setup() {
    const store = useStore();
    const width = computed(() => {
      return store.getters.width;
    });
    const src = computed(() => {
      return store.getters.src;
    });
    const height = computed(() => {
      return store.getters.height;
    });
    const zoom = computed(() => {
      return store.getters.zoom;
    });
    return {
      width,
      height,
      src,
      zoom,
    };
  },
  methods: {
    onImageLoad(e) {
      const img = e.target;
      this.imageAspectRatio = img.naturalWidth / img.naturalHeight;
    },
    zoomPlus() {
      this.$refs.zoomer.zoomIn();
    },
    zoomMinus() {
      this.$refs.zoomer.zoomOut();
    },
  },
};
</script>
<style>
button {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: yellow !important;
  font-size: 22px !important;
  margin: 3px;
}
button:hover {
  background-color: green !important;
  color: white;
}
.navbar {
  width: 380px !important;
}
</style>
