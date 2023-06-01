import axios from "axios";
//const API=axios.create({baseURL:"https://server.dropspot.in"})
const API=axios.create({baseURL:"http://localhost:5007"})

export const createOrder=(data)=>API.post("/order/create",data)
export const createpreOrder=(data)=>API.post("/preorder/create",data)

export  const editOrder=(data)=>API.post("/order/edit",data)

export  const cancelOrder=(data)=>API.post("/order/cancel",data)

export  const mypreOrders=(data)=>API.post("/preorder/preorderlist",data)
export  const myshopifyOrders=(data)=>API.post("/shoipifyorder/shopifyOrder",data)
export  const myOrders=(data)=>API.post("/order/myOrder",data)
export  const sellerpreOrders=(data)=>API.post("/preorder/sellerpreOrder",data)
export  const preOrderFullFill=(data)=>API.post("/order/FullFillPreOrder",data)
export const      allreturn              =(data)=>API.post("/order/return",data)
export const      allclosed              =(data)=>API.post("/order/close",data)
export const        allcomplete            =(data)=>API.post("/order/complete",data)
export const        alldispatched            =(data)=>API.post("/order/dispatched",data)
export const       allprocessing             =(data)=>API.post("/order/processing",data)
export const        allpending            =(data)=>API.post("/order/pending",data)
export const         allawaitingPayments           =(data)=>API.post("/order/awaitingpayments",data)
export const       changereturnstatus             =(data)=>API.post("/order/changereturnstatus",data)
export const       changeclosestatus             =(data)=>API.post("/order/changecompletestatus",data)
export const        changedispatchedstatus          =(data)=>API.post("/order/changedispatchedstatus",data)
export const        changeprocessingstatus        =(data)=>API.post("/order/changeprocessingstatus",data)
export const        changependingstatus        =(data)=>API.post("/order/changependingstatus",data)
export const       requestpaymentstatus        =(data)=>API.post("/order/requestpaymentstatus",data)
