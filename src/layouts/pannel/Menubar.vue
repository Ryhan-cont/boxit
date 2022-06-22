<template>
    <div class="pannel--menubar" v-if="menu.status == true" :style="{right:floatingShadow == true ? 0 : 'auto'}">
        menu
    </div>
</template>
 
<script setup>
    import controller from './controller.js'
    import { menuData } from './menu.js'
    import { ref, reactive, onMounted, computed  } from 'vue'
    const { menu, floatingShadow, toggleMenu, pindetail } = controller;

    const selectedMenu = ref('home');
    const menuItem = reactive([])

    const menuSelected = (item,index) => {
        selectedMenu.value = item
        menuItem.length = 0;
        menuItem.push(...menuData[index].items);
        menu.menuDetail = true;
        console.log(menuItem);
    }
    onMounted(()=>{
        menuItem.push(...menuData[0].items)
    })
    
</script>