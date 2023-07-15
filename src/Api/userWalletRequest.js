import axios from "axios";
const API=axios.create({baseURL:"https://server.dropspot.in"})
 //const API=axios.create({baseURL:"http://localhost:5007"})


export const getUserWallet=(data)=>API.get(`/user/getwallet/${data}`)