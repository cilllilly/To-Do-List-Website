<template>
    <div id="container">
        <h1>Sign Up</h1>
        <form @submit.prevent = "newUser">
            <div class="group">
                <label for="email">email </label>
                <input type="email" id="userEmail" v-model="email" placeholder="enter your email: " required>
                
            </div>
            <div class="group">
                <label for="password">password </label>
                <input type="password" id="password" v-model="password" placeholder="enter your password: " required>
            </div>
            <button id="submit" type="submit">Sign Up</button>
        </form>
        
    </div>
</template>

<script>
    import axios from "axios";
    export default{
        name: "SignUpView",
        data(){
            return{
                email: "",
                password: ""
            }
        },
        methods: {
            async newUser(){
                const api = axios.create({
                    baseURL: "http://localhost:5000"
                })
                try{
                    if(this.password.length < 4){
                        throw new Error("Password must be at least 4 characters long")
                    }
                    //send data to the backend
                    const response = await api.post("/api/signup",{
                        email: this.email,
                        password: this.password
                    });
                    const result = await response.json()
                    console.log("success")
                    this.email = ""
                    this.password = ""
                    this.$router.push("/")
                    return result
                }catch(error){
                    console.log("error happened" + Error)
                }
            }
        }
    }
</script>

<style>
    .group label{
        font-size: 30px;
    }
    .group input{
        padding: 0.2vw 0.1vh;
    }
    #submit{
        padding: 0.6vw 2.5vh;
        background-color: rgb(0, 140, 255);
        color:white;
        cursor: pointer;
        border-radius: 15px;
    }
</style>