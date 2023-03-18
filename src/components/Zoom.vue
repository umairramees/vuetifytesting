<template>    
    <div class="zoom-group">
        <v-card class="zoomitem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="24px"><path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"/></svg></v-card>
        <v-card class="zoomitem"><v-icon icon="mdi-printer" /></v-card>
        <br />
        <v-card class="zoomitem" @click="zoomout"><v-icon icon="mdi-plus" /></v-card>
        <v-card class="zoomval">{{percent_store}}%</v-card>
        <v-card class="zoomitem" @click="zoomin"><v-icon icon="mdi-minus" /></v-card>
    </div>
</template>
<script lang="ts">

import { reactive, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    data () {
        return {
            percent: 0
        }
    },
    methods: {
        // zoomout(event) {
        //     this.percent += 25;
        // }
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
      const zoomout = (event) => {
        store.commit('zoomoutPercent')
      }
      return {
        percent_store,
        zoomin,
        zoomout
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
