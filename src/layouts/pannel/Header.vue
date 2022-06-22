<template>
    <div class="pannel--header" :style="{left:menuTotalSpace+'px',height:navbar.height+'px'}">
        header
    </div>
</template>
 
<script setup>
    import controller from './controller.js'
    const { menu, navbar, toggleMenu, menuTotalSpace} = controller;
    import { ref  } from 'vue'
    const select = ref(null)
    const ShowFullSearch = ref(false)
</script>

<style lang="scss">
    .header-notification-container{
        display: flex;
        align-items: center;
        padding: 0px 30px;
    }
    .header-propic-container{
        display: flex;
        align-items: center;
    }
</style>