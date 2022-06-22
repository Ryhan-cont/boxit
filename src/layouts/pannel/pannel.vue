<template>
  <div class="pannel--layout" :style="{gridTemplateColumns:menu.menuWidth+'px 1fr'}">
    <Menubar />
    <Body>
      <Header />
      <div style="flex:auto;">
        <div><router-view /></div>
      </div>
    </Body>
  </div>
    
</template>
<script setup>
    import Header from './Header.vue';
    import Menubar from './Menubar.vue';
    import Body from './Body.vue';



    import {onBeforeMount} from 'vue'
    import controller from './controller.js'

    const { innitialLoader, resizeController, menu } = controller;

    onBeforeMount(()=>{
        innitialLoader();
        window.addEventListener('resize', resizeController);
    })
</script>