import express from "express"
import mongoose from "mongoose"
import { productModel } from "./models/productModel.mjs"

const app = express()
const port = 4000

app.use(express.json())

mongoose.connect("mongodb+srv://teaching:12345@cluster0.ox00ado.mongodb.net/crud-teaching?retryWrites=true&w=majority&appName=Cluster0").then((data) => {
    console.log("Mongodb Connnect Successfuly!")
}).catch((err) => {
    console.log("Mongodb Disconnected!")
})


app.post("/create", async (req, res) => {
    try {
        const { title, description, price, company, category, stock } = req.body
        console.log(title);
        console.log(description);
        console.log(price);
        console.log(company);
        console.log(category);
        console.log(stock);


        const product = productModel({
            title,
            description,
            price,
            company,
            category,
            stock
        })
        await product.save()

        res.json({
            message: "Product Created Succesfully!",
            success: true
        })
    } catch (error) {
        res.json({
            message: error.message,
            success: false
        })
    }
})



app.listen(port, () => {
    console.log("Server is listening at Port : " + port)
})