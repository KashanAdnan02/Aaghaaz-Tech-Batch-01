import React, { useState } from 'react'
import axios from "axios"
const App = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [company, setCompany] = useState("")
  const [category, setCategory] = useState("")
  const [stock, setStock] = useState(0)

  const [products, setProducts] = useState()

  function addProduct() {
    console.log(title)
    console.log(description)
    console.log(price)
    console.log(company)
    console.log(category)
    console.log(stock)
    axios.post("http://localhost:4000/create", {
      title,
      description,
      price,
      company,
      category,
      stock
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

  function getProducts() {
    axios.get("http://localhost:4000/get").then((data) => {
      console.log(data.data.products)
    }).catch((err) => {
      console.log(err);
    })
  }
  getProducts()
  return (
    <div>
      <div>
        <input type="text" placeholder='product title' onChange={(e) => setTitle(e.target.value)} /> <br />
        <input type="text" placeholder='product description' onChange={(e) => setDescription(e.target.value)} /> <br />
        <input type="number" placeholder='product price' onChange={(e) => setPrice(e.target.value)} /> <br />
        <input type="text" placeholder='product company' onChange={(e) => setCompany(e.target.value)} /> <br />
        <input type="text" placeholder='product category' onChange={(e) => setCategory(e.target.value)} /> <br />
        <input type="number" placeholder='product stock' onChange={(e) => setStock(e.target.value)} /> <br />
        <button onClick={addProduct}>Add Product</button>
      </div>

    </div>
  )
}

export default App