<template>
    <div class="container">
        <nuxt-link to="/">Home</nuxt-link>
        <slot />
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
.container{
    max-width: 1200px;
    margin: 0 auto;
}
</style>