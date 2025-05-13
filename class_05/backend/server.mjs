import express from "express" // require
import mongoose from "mongoose" // imported mongoose
const app = express(); // app
import userModel from "./models/userModel.mjs"
const port = 3000; // varibale
import cors from "cors"

app.use(express.json())  ///  0
app.use(cors(
    {
        origin: 'http://localhost:3001'
    }
))

mongoose.connect("mongodb+srv://kashanadnan:password6276@cluster0.ox00ado.mongodb.net/agghaaztech-lms?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("MongoDB COnnected");
    }).catch(() => {
        console.log("mongodb disconnected");

    })

app.post("/", async (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const user = userModel({
        name: name,
        email: email,
        password: password
    })
    await user.save()
    res.send("User Added Successfully in the database")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});