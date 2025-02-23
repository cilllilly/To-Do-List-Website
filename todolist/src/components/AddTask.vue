<template>
    <form action="add-form">
        <div class = "form-control">
            <label for="task-name">Add Task Name</label>
            <input type="text" name = "task-name" placeholder="">
        </div>
        <div class = "form-control">
            <label for="time-date">Add Task Time and Date</label>
            <input type="date" name = "time-date" placeholder="">
        </div>
        <input type="submit" value = "save" class = "btn">
    </form>
</template>

<script>

</script>

<style scoped>
    .btn{
        color: rgb(255, 255, 255);
        background-color: rgb(85, 85, 241);
        border-color: rgb(85, 85, 241);
        width: 20%;
        padding: 10px 20px;
        font-size: 20px;
        margin: 0 20px;
    }
    .form-control{
        margin: 20px 0px;
        
    }
    .form-control label{
        display: block;
        font-size: 25px;
        color: rgb(103, 103, 180);
    }
    .form-control input{
        width: 50%;
        height: 30px;
        margin: 20px;
        font-size: 17px;
    }

</style>