import axios from "axios";
const API=axios.create({baseURL:"https://server.dropspot.in"})
// const API=axios.create({baseURL:"http://localhost:5007"})
export const payment=(data)=>API.post('/payment/cashin',data)
export const payout=(data)=>API.post('/payment/cashout',data)