const orders =  [
    {orderNo:134, mobileId:1, quantity:2},
    {orderNo:156, mobileId:2, quantity:1},
    {orderNo:188, mobileId:4, quantity:3},
    {orderNo:291, mobileId:2, quantity:4},
    {orderNo:322, mobileId:4, quantity:4},
    {orderNo:215, mobileId:3, quantity:1}
];
function getTotalOrder(){
    return orders.reduce((acc,curr)=>acc+curr.quantity,0)
}
function getMobileById(id){
    return orders.find(n=>n.mobileId===id)
}
module.exports={orders,getTotalOrder,getMobileById}