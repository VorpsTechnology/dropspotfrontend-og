import axios from "axios"

const API=axios.create({baseURL:"https://server.dropspot.in"})
 //const API=axios.create({baseURL:"http://localhost:5007"})
export const uploadImage=(data)=>API.post("/upload",data)

export const uploadPost =(data)=>API.post("/product/add",data)