import axios from "axios";
const API=axios.create({baseURL:"https://server.dropspot.in"})
// const API=axios.create({baseURL:"http://localhost:5007"})



export const getToken= (data)=>API.get("/shipping/gettoken")
export const createToken=(data)=>API.post("/shipping/createtoken",data)
export const shippingcalculator=(data)=>API.post("/shipping/shippingcalculator",data)