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
//const port=2410;
var port = process.env.PORT || 2410;
app.listen(port,()=>console.log(`Listening on port ${port}!`));

let {carMaster,cars}=require("./carsData.js");
app.get("/svr/cars/:id",function(req,res){
    let id=req.params.id
    let body=req.body
    let a=cars.find(n=>n.id==id)
    res.send(a)
})
app.get("/svr/cars",function(req,res){
    let minPrice=+req.query.minPrice
    let maxPrice=+req.query.maxPrice
    let fuel=req.query.fuel
    let type=req.query.type
    let sort=req.query.sort

    let arr1=cars

    if(minPrice){
        arr1=arr1.filter(n=>n.price>=minPrice)
    }
    if(maxPrice){
        arr1=arr1.filter(n=>n.price<=maxPrice)
    }
    if(fuel){
        let a=carMaster.filter(n=>n.fuel==fuel)
        arr1=arr1.filter(m=>a.find(n=>n.model==m.model))
    }
    if(type){
        let a=carMaster.filter(n=>n.type==type)
        arr1=arr1.filter(m=>a.find(n=>n.model==m.model))
    }
    if(sort=='kms'){
        arr1=arr1.sort((a,b)=>a.kms-b.kms)
    }
    if(sort=='price'){
        arr1=arr1.sort((a,b)=>a.price-b.price)
    }
    if(sort=='year'){
        arr1=arr1.sort((a,b)=>a.year-b.year)
    }
    res.send(arr1)
})
app.post("/svr/cars",function(req,res){
    let body=req.body
    cars.push(body)
    res.send(body)
})

app.put("/svr/cars/:id",function(req,res){
    let id=req.params.id
    let body=req.body
    let index=cars.findIndex(n=>n.id==id)
    if(index>0)
    {
        let updatedCar={id:id,...body}
        cars[index]=updatedCar
        res.send(updatedCar)
    }
    else{
        res.status(404).send("No Car Found")
    }
})
app.delete("/svr/cars/:id",function(req,res){
    let id=req.params.id
    let body=req.body
    let arr1=cars.splice(cars.findIndex(n=>n.id==id),1)
    res.send(arr1)
})
app.get("/svr/carsMaster",function(req,res){
    let arr1=carMaster
    res.send(arr1)
})