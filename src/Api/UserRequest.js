import axios from "axios";
//const API=axios.create({baseURL:"https://server.dropspot.in"})
 const API=axios.create({baseURL:"http://localhost:5007"})

export const getUser=(data)=>API.get(`/user/${data}`)
export const getconnectedshops=(data)=>API.post("/user/getconnectedshops",data)
// // export const login=(data)=>API.post('/auth/login',data)
// export const otpLogin=(data)=>API.post('/auth/mobile',data)
// export const otpConfirm=(data)=>API.post('/auth/otp',data)