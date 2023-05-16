import axios from "axios";
 //const API=axios.create({baseURL:"https://server.dropspot.in"})
const API=axios.create({baseURL:"http://localhost:5000"})

export const createOrder=(data)=>API.post("/order/create",data)

export  const editOrder=(data)=>API.post("/order/edit",data)

export  const cancelOrder=(data)=>API.post("/order/cancel",data)


export  const myOrders=(data)=>API.post("/order/myOrder",data)
export  const sellerOrders=(data)=>API.post("/order/sellerOrder",data)
export  const preOrderFullFill=(data)=>API.post("/order/FullFillPreOrder",data)
