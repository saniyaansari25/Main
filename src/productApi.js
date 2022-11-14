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

let {productData}=require("./productData.js");
const { studentsData } = require("./studentsData.js");


app.get("/svr/products/:prodname",function(req,res){
    let name=req.params.prodname
    let product=productData.find(n=>n.prod===name)
    res.send(product)
})
app.get("/svr/products/category/:catname",function(req,res){
    let cat=req.params.catname
    let products1=productData.filter(n=>n.category===cat)
    res.send(products1)
})
app.get("/svr/products/order/:feild",function(req,res){
    let feild=req.params.feild
    let product=productData.filter(n=>n.price==feild || n.quantity==feild || n.price*n.quantity==feild)
    res.send(product)
})
app.get("/svr/products",function(req,res){
    let cat=req.query.category
    let maxPrice=req.query.maxPrice
    let minqty=req.query.minqty
    let maxqty=req.query.maxqty
    let arr1=productData
    if(cat) 
    {
        arr1=productData.filter(n=>n.category==cat)
    }
    if(maxPrice)
    {
        arr1=arr1.filter(n=>n.price<=maxPrice)
    }
    if(maxqty)
    {
        arr1=arr1.filter(n=>n.quantity<=maxqty)
    }
    if(minqty)
    {
        arr1=arr1.filter(n=>n.quantity>=maxqty)
    }
    if(arr1.length>0)
    {
        res.send(arr1)
    } 
    else {
       res.status(404).send("No Product Found")
    }
})
app.post("/svr/products",function(req,res){
    let body=req.body
    console.log(body)
    productData.push(body)
    res.send(body)
})
app.put("/svr/products/:prodname",function(req,res){
    let name=req.params.prodname
    let body=req.body
    let index=productData.findIndex(n=>n.prod==name)
    let updatedProduct={...body}
    productData[index]=updatedProduct
    res.send(updatedProduct)
})
app.delete("/svr/products/:prodname",function(req,res){
    let name=req.params.prodname
    let index=productData.findIndex(n=>n.prod==name)
    let deletedProduct=productData.splice(index,1)
    res.send(deletedProduct)
})