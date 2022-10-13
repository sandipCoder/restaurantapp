<template>
<HeaderView />
<div class="container">
    <div class="row justify-content-center">
        <router-view />
    </div>
</div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";
export default {
    name: "App",
    components: {
        HeaderView
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
