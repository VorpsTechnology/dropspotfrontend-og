import axios from "axios";
//const API=axios.create({baseURL:"https://server.dropspot.in"})
const API=axios.create({baseURL:"http://localhost:5000"})
export const getAllProducts=(data)=>API.get(`/product/getproducts/${data}`)
export const getProduct=(id)=>API.get(`/product/${id}`)
export const uploadCsv=(data)=>API.post('/product/addbulk',data)