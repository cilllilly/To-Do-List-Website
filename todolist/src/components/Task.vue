<template>
    <div class = "task">
        <h3>
            <i class = "fa fa-square task-icon"></i>
            <p>do dishes</p>
            <i class="fa fa-trash trash-icon"></i>
        </h3>
        <p>2/23/2025</p>
    </div>
</template>

<script>
    export default{
        name: "Task-main",
    }
</script>

<style scoped>
    .task{
        background-color: rgb(113, 179, 255);
        padding: 20px 30px;
        margin: 5px;
        cursor: pointer;
        border-radius: 10px;

    }
    .task-icon:hover{
        color: aquamarine;
    }
    .trash-icon:hover{
        color: red;
    }
    .task h3{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

</style>