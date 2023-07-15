import axios from "axios"

//const API=axios.create({baseURL:"https://server.dropspot.in"})
 const API=axios.create({baseURL:"http://localhost:5007"})
export const getWishlist=(data)=>API.post("/wishlist/get",data)

export  const addToWishlist=(data)=>API.post("/wishlist/add",data)

export  const removeFromWishlist=(data)=>API.post("/wishlist/remove",data)