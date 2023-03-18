<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        location="right"
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
          <v-list-item v-for="item in items" v-bind:key="item.icon">
            <CheckBoxItem :value="item.value" :subtitle="item.title" />
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <v-img
          :width="width"
          :height="height"
          aspect-ratio="16/9"
          cover
          :src="'/src/assets/images/'+src"
        ></v-img>
        <Zoom />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  import CheckBoxItem from './CheckBoxItem.vue'
  import Zoom from './Zoom.vue'
  import { useStore } from 'vuex';
  import { computed } from 'vue';

  export default {
    components: {
      CheckBoxItem,
      Zoom
    },
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Accolade', value: 'A03359C5-9C11-489B-B50E-19C8F0AD8950.jpg' },
          { title: 'Affinity', value: '50017383-B6A0-48C4-B040-643F9D8B451F.jpg' },
          { title: 'Allure', value: 'A7BDA6BA-7BB7-4B0C-93F2-B2B44445FFFD.jpg' },
          { title: 'Apex', value: 'BB6FB45D-6CF3-48CA-B19B-E8D0DB0F4F77.jpg' },
          { title: 'Ascend', value: 'DCBA1B5C-6F9B-4ECD-AA72-19115704BF56.jpg' },
          { title: 'Aspire', value: 'D45CDAA1-8AE3-4E85-A288-4266DF2C2D17.jpg' },
          { title: 'Asset', value: 'CEEA3A26-BE39-4E33-ADFE-091167F8E12F.jpg' },
          { title: 'Assurance', value: 'E6A9FAEA-2E8F-49E9-9978-D04A5BA25C78.jpg' },
          { title: 'Atlas', value: 'F0A6F649-15B8-4B8F-89A1-8F5AE5831FE2.jpg' },
          { title: 'Gadenia', value: 'F49F7E29-92BE-4593-88A6-B8BA445197FE.jpg' },
        ],
        rail: false,
      }
    },
    setup() {
      const store = useStore();
      const width = computed(() => {
        return store.getters.width
      });
      const src = computed(() => {
        return store.getters.src
      });
      const height = computed(() => {
        return store.getters.height
      });
      return {
        width,
        height,
        src
      }
    }
  }
</script>
