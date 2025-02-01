<template>
    <button @click = "onClick()" :style="{background: color}" class = "btn btn-add">{{ text }}</button>
</template>

<script>
    export default{
        name: "Button-main",
        props: {
            color: String,
            text: String
        },
        methods: {
            onClick(){
                this.$emit("btn-click")
            }
        }
    }
</script>

<style>
    .btn{
        display: inline-block;
        border: none;
        padding: 10px 30px;

    }
</style>