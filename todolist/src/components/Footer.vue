<template>
    <footer>
        <p>
            By: Cillian Moore! &copy; 2025
        </p>
        <router-link @click = "$emit('header-off')" to = "/about" class = "link"><button>About</button></router-link>
    </footer>
</template>

<script>
    export default{
        name: "Footer-main",
    }
</script>

<style scoped>
    footer {
        margin-top: 100px;
        text-align: center;
    }
    .link {
        color: red;
    }
    .link:hover{
        color: blue;
    }
</style>