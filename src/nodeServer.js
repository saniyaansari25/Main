let express=require("express");
let app=express();
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept"
    );
    next();
});
const port=2410;
app.listen(port,()=>console.log(`Listening on port ${port}!`));

let {nodeData}=require("./nodeData.js");

app.get("/svr/customers",function(req,res){
    let city=req.query.city
    let gender=req.query.gender
    let payment=req.query.payment
    let sortBy=req.query.sortBy

    let arr1=nodeData

    if(city)
    {
        arr1=arr1.filter(n=>n.city==city)
    }
    if(gender)
    {
        arr1=arr1.filter(n=>n.gender==gender)
    }
    if(payment)
    {
        arr1=arr1.filter(n=>n.payment==payment)
    }
    if(sortBy)
    {
        if(sortBy=='payment') arr1=arr1.sort((a,b)=>a.payment.localeCompare(b.payment))
        if(sortBy=='city') arr1=arr1.sort((a,b)=>a.city.localeCompare(b.city))
        if(sortBy=='gender') arr1=arr1.sort((a,b)=>a.gender.localeCompare(b.gender))
        if(sortBy=='age') arr1=arr1.sort((a,b)=>a.age-b.age)
    }
    if(arr1.length>0)
    {
        res.send(arr1)
    }
    else{
        res.status(404).send("No Customer Found")
    }
    
})
app.get("/svr/customers/:id",function(req,res){
    let id=req.params.id
    let customer=nodeData.find(n=>n.id==id)
    res.send(customer)
})
app.post("/svr/customers",function(req,res){
    let body=req.body
    let newCustomer={...body}
    nodeData.push(newCustomer)
    res.send(newCustomer)
})
app.put("/svr/customers/:id",function(req,res){
    let id=req.params.id
    let body=req.body
    let index=nodeData.findIndex(n=>n.id==id)
    if(index>=0)
    {
        let updatedCustomer={...body}
        nodeData[index]=updatedCustomer
        res.send(updatedCustomer)
    }
    else{
        res.status(404).send("No Customer Data Found")
    }
})
app.delete("/svr/customers/:id",function(req,res){
    let id=req.params.id
    let body=req.body
    let index=nodeData.findIndex(n=>n.id==id)
    if(index>=0)
    {
        let deletedCustomer=nodeData.splice(index,1)
        res.send(deletedCustomer)
    }
    else{
        res.status(404).send("No Customer Data Found")
    }
})