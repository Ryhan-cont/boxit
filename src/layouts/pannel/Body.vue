<template>
    <div class="pannel--body" >
        <slot />
    </div>
</template>

<script setup>
    import controller from './controller.js'
    const {menuWidth} = controller;
</script>