const { default: axios } = require("axios");
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
        "Origin, X-Requested-With, Content-Type,Accept, Authorization"
    );
    next();
});
app.use(showUrlMethod)
var port=process.env.PORT || 2410;
//const port=2410;
app.listen(port,()=>console.log(`Listening on port ${port}!`));

let arr=[]
function showUrlMethod(req,res,next){
    let a={Url : `${req.url}`, Method : `${req.method}`}
    arr.push(a)
    
    console.log(`Url : ${req.url} Method : ${req.method}`)
    
    next();
}

let {data}=require("./myStoreData.js");
let orders=[];
let ordList=[
    {name:"Ashok",city:"Delhi",address:"Sector-15",amount:2499.00,items:2},
    {name:"Puneet",city:"Delhi",address:"Connaught Place",amount:799.00,items:3},
    {name:"Rohit Kumar",city:"Chandigarh",address:"15-A,Sector 16A",amount:1249.00,items:2},
    {name:"Preeti Singh",city:"Gurgaon",address:"Street No 34",amount:13244.00,items:13},
    {name:"Pooja",city:"Gurgaon",address:"154, Maple Street Sector H",amount:2444.00,items:3},
    {name:"Ravi Kumar",city:"Noida",address:"Street 404,Sector 21",amount:1396.00,items:4},
    {name:"Ankit Kumar",city:"Noida",address:"House No 108,Sector 18",amount:3893.00,items:7},
    
];

app.post("/login",function(req,res){
    let email=req.body.email
    let password=req.body.password
    if(email=='email@test.com' && password=='12345678')
    {
        let data1=orders.map(n=>n)
        res.send(data1)
    }
})
app.get("/orderList",function(req,res){
    
    let data1=ordList.map(n=>n)
    res.send(data1)
})
app.post("/orderList",function(req,res){
    let body=req.body

    let newData={...body}
    ordList.push(newData)
    
    let data1=ordList.map(n=>n)
    res.send(data1)
})
app.get("/products/:id/edit",function(req,res){
    let id=req.params.id
    console.log(id)
    let data1=data.filter(n=>n.id==id)
    res.send(data1)   
})
app.get("/products/:category",function(req,res){
    let category=req.params.category
    
    if(category.length>2)
    {
        console.log("CAT",category)
        let data1=data.filter(n=>n.category==category)
        res.send(data1)
    }
    else if(category.length<=2)
    {
        console.log(category)
        let data1=data.filter(n=>n.id==category)
        res.send(data1)
    }
    else{
        let data1=data.map(n=>n)
        res.send(data1)
    }
})
app.get("/products",function(req,res){
    
    let data1=data.map(n=>n)
    res.send(data1)
})
app.get("/orders",function(req,res){
    
    let data1=orders.map(n=>n)
    res.send(data1)
})

app.post("/orders",function(req,res){
    let body=req.body

    let newData={...body,qty:1}
    let find=orders.find(n=>n.id==newData.id)
    let index=orders.findIndex(n=>n.id==newData.id)
    console.log(index)
    if(find){
        orders[index].qty+=1
    }
    else{
        orders.push(newData)
    }
    let data1=orders.map(n=>n)
    res.send(data1)
})
app.put("/orders",function(req,res){
    let body=req.body
    let newData={...body}
    let index=orders.findIndex(n=>n.id==newData.id)
    orders[index]=newData
    let data1=orders.map(n=>n)
    res.send(data1)
})
app.delete("/orders/:id",function(req,res){
    let id=req.params.id
    let index=orders.findIndex(n=>n.id==id)
    orders.splice(index,1)
    let data1=orders.map(n=>n)
    res.send(data1)
})
app.post("/products",function(req,res){
    let body=req.body

    let maxId=data.reduce((acc,curr)=>curr.id>acc ? curr.id : acc,0)
    let newId=maxId+1

    let newData={...body,id:newId}
    data.push(newData)
    let data1=data.map(n=>n)
    res.send(data1)
})
app.put("/products/:id",function(req,res){
    let body=req.body
    let id=req.params.id
    let index=data.findIndex(n=>n.id==id)
    data[index]=body
    res.send(data)
})
app.delete("/products/:id",function(req,res){
    let body=req.body
    let id=req.params.id
    let index=data.findIndex(n=>n.id==id)
    data.splice(index,1)
    res.send(data)
})
app.get("/allRequests",function(req,res){
    console.log("In the route : GET /allRequests")
    res.send({route : "/allRequests",user:req.user,arr:arr})
})