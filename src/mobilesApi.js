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
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
const port=2410;
app.listen(port, ()=>console.log(`Listening on Port ${port}!`));

let {mobilesData}=require("./mobilesData.js")


app.get("/svr/mobiles/:name",function(req,res){
    let name=req.params.name
    let mobile=mobilesData.find(n=>n.name===name)
    res.send(mobile)
})
app.get("/svr/mobiles/brand/:brandName",function(req,res){
    let brand=req.params.brandName
    let mobile=mobilesData.find(n=>n.brand===brand)
    res.send(mobile)
})
app.get("/svr/mobiles/color/:color",function(req,res){
    let color=req.params.color
    let mobile=mobilesData.filter(n=>n.colors.find(c=>c==color))
    res.send(mobile)
})
app.get("/svr/mobiles/RAM/:ramSize",function(req,res){
    let ram=req.params.ramSize
    let mobile=mobilesData.filter(n=>n.RAM.find(c=>c==ram))
    res.send(mobile)
})
app.get("/svr/mobiles/ROM/:romSize",function(req,res){
    let rom=req.params.romSize
    let mobile=mobilesData.filter(n=>n.ROM.find(c=>c==rom))
    res.send(mobile)
})
app.get("/svr/mobiles",function(req,res){
    let ram=req.query.ram
    let rom=req.query.rom
    let color=req.query.color
    let brand=req.query.brand

    let arr1=mobilesData
    if(ram)
    {
        arr1=arr1.filter(n=>n.RAM.find(r=>r==ram))
    }
    if(rom)
    {
        arr1=arr1.filter(n=>n.ROM.find(r=>r==rom))
    }
    if(color)
    {
        arr1=arr1.filter(n=>n.colors.find(r=>r==color))
    }
    if(brand)
    {
        arr1=arr1.filter(n=>n.brand==brand)
    }
    if(arr1.length>0)
    {
        res.send(arr1)
    }
    else{
        res.status(404).send("No Product Found")
    }
    
    
})