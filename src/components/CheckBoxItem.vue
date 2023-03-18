<template>
    <v-card class="borderbox">
        <input type="checkbox" :data-src="value" @click="changeImage"/>
    </v-card>
</template>
<script lang="ts">
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
export default {
    props:[
        'value'
    ],
    data: () => {
        
    },
    setup(){
        const store = useStore();
        const changeImage = (e) => {
            if(e.target.checked){
                store.commit('setSrc', e.target.getAttribute('data-src'))
            }else{                
                store.commit('setSrc', 'A03359C5-9C11-489B-B50E-19C8F0AD8950.jpg')
            }
        }
        return {
            changeImage
        }
    }
}
</script>
<style scoped>
.borderbox {
    border: 1px solid rgb(203, 224, 235);
    border-left: 8px solid rgb(21, 23, 24) !important;
    height: 40px;
    box-sizing: border-box;
    border-radius: 0;
    cursor: pointer;
}
.borderbox:hover {
    border-left: 12px solid rgb(95, 198, 250) !important;
    background: linear-gradient(90deg, rgba(95, 198, 250,0.6), rgba(255,255,255,0));
}
.title {
    line-height: 40px !important;
    font-size: 10px !important;
}
input[type=checkbox] {
    vertical-align: middle;
    position: absolute;
    right: 10px;
    top: 11px;
}
</style>