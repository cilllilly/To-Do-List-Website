const express = require("express")
const sqlite3 = require("sqlite3").verbose()
const bcrypt = require("bcrypt")
const cors = require("cors")
const app = express()

app.use(cors({
    origin: ["http://localhost:8080","http://localhost:3000"],
    credentials: true
}))
app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({extended:true}))
app.use((req,res,next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
    console.log('Request body:', req.body)
    console.log("testing")
})

const db = new sqlite3.Database("../database.db", (error)=>{
    if(error){
        console.log("error opening data base", error.message)
    }
    else{
        console.log("success message")
    }
})

//sign up end point
app.post("/api/signup", async (request,response)=> {
    console.log("test2")
    try {
        const {email,password} = request.body
        //encrypt password
        const encrypted = await bcrypt.hash(password,10)
        console.log("inserting data into database.")
        db.run(
            `insert into Users (email,password) values (?,?)`,[email,encrypted],
            function(Error){
                if(Error){
                    if(Error.code == "SQLITE_CONSTRAINT_UNIQUE"){
                        return response.status(400).json({message:"email already exists"})
                    }
                    return response.status(500).json({message: "database error"})
                }
                return response.status(200).json({message: "user created successfully"})
            }

        )
    } catch (error) {
        response.status(500).json({message: "internal server error"})
    }
})

app.post("/api/login", (request,response)=>{
    const {email,password} = request.body
    db.get("SELECT * from Users where email=?", [email], 
        function(error, user){
            if(error){
                return response.status(500).json({message: "server error"})
            }
            if(!user){
                return response.status(404).json({message: "user was not found"})
            }
            try {
                const validatePassword = bcrypt.compare(password,user.password)
                if(!validatePassword){
                    return response.status(401).json({message: "invalid password"})
                }
                response.json({message: "login successful", userId: user.id,userEmail: user.email})
            } catch (error) {
                response.status(500).json({message: "server error"})
            }
        }

    )
})

//get all the users
app.get("/api/users", (request,response)=> {
    db.all("SELECT id, email FROM Users", [], (error, rows)=>{
        if(error){
            return response.status(500).json({message: "server error"})
        }
        response.json(rows)
    })
})

//start server
const port = 5000
app.listen(port,()=>{
    console.log("server is running")
})