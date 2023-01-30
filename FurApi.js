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
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
})
//const port=2410;
var port=process.env.PORT || 2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));

let {data}=require("./furData.js");
let cart=[];
let addToCart=[];

let fs=require("fs")
let fname1="furniture.json";
let fname2="cart.json";
let fname3="add1.json";

app.get("/product",function(req,res){
    let data1=JSON.stringify(data)
    fs.writeFile(fname1,data1,function(err){
        if(err)res.status(404).send(err)
        fs.readFile(fname1,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let furArray=JSON.parse(data)
                res.send(furArray)
            }
        })
    })
})
app.post("/products/add",function(req,res){
    let body=req.body
    console.log(body)
    fs.readFile(fname1,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let newProduct={...body}
        let a=[...JSON.parse(data)]
        a.push(newProduct)
        console.log(a)
        let d1=JSON.stringify(a)
        fs.writeFile(fname1,d1,function(err){
            if(err)res.status(404).send(err)
            else res.send("Done")
        })
    })     
})
app.put("/products/:prodCode",function(req,res){
    let prodCode=req.params.prodCode
    let body=req.body
    fs.readFile(fname1,"utf8",function(err,data){
        if(err)console.log(err)
        else{
            let furArray=JSON.parse(data)
            let index=furArray.findIndex(n=>n.prodCode===prodCode)
            furArray[index]={...body}
            let d1=JSON.stringify(furArray)
            fs.writeFile(fname1,d1,function(err){
                if(err)res.status(404).send(err)
                else res.send("Done")
            })
        }
    })
})
app.delete("/products/:prodCode",function(req,res){
    let prodCode=req.params.prodCode
    fs.readFile(fname1,"utf8",function(err,data){
        if(err)console.log(err)
        else{
            let furArray=JSON.parse(data)
            let index=furArray.findIndex(n=>n.prodCode===prodCode)
            furArray.splice(index,1)
            let d1=JSON.stringify(furArray)
            fs.writeFile(fname1,d1,function(err){
                if(err)res.status(404).send(err)
                else res.send("Done")
            })
        }
    })
})
app.get("/products",function(req,res){
    fs.readFile(fname1,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let furArray=JSON.parse(data)
            res.send(furArray)
        }
    })
})

app.get("/products/:prodCode",function(req,res){
    let prodCode=req.params.prodCode
    console.log(prodCode)
    if(prodCode=="Dining"||prodCode=="Drawing"||prodCode=="Bedroom"|| prodCode=="Study")
    {
        fs.readFile(fname1,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let furArray=JSON.parse(data)
                let products=furArray.filter(n=>n.category==prodCode)
                
                res.send(products)
            }
        })
    }
    else if(prodCode)
    {
        fs.readFile(fname1,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let productArray=JSON.parse(data)
                let cart=productArray.find(n=>n.prodCode==prodCode)
                let d=JSON.stringify(cart)
                fs.writeFile(fname2,d,function(err){
                    if(err)res.status(404).send(err)
                    else{
                        fs.readFile(fname1,"utf8",function(err,data){
                            if(err)res.status(404).send(err)
                            else{
                                let furArray=JSON.parse(data)
                                let products=furArray.filter(n=>n.category==cart.category)
                                let j={cart:cart,products:products}
                                res.send(j)
                            }
                        })
                    }
                })
            }
        })
    }
    else{
        fs.readFile(fname1,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let furArray=JSON.parse(data)
                res.send(furArray)
            }
        })
    }
})



app.post("/login",function(req,res){
    let email=req.body.email
    let password=req.body.password
    if(email=="user@user.com" && password=="12345678")
    {
        fs.readFile(fname1,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let furArray=JSON.parse(data)
                res.send(furArray)
            }
        }) 
    }
    else if(email=="admin@admin.com" && password=="admin123")
    {
        fs.readFile(fname1,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let furArray=JSON.parse(data)
                res.send(furArray)
            }
        }) 
    }
})
app.post("/cart",function(req,res){
    let body=req.body
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let newProduct={...body}
        addToCart.find(n=>n==newProduct ? n.qty+=1 : '')
        addToCart.push(newProduct)
        let data1=JSON.stringify(addToCart)
        fs.writeFile(fname3,data1,function(err){
            if(err)res.status(404).send(err)
            else res.send(addToCart)
        })
    })    
})
app.get("/cart",function(req,res){
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)console.log(err)
        else{
           res.send(addToCart)
        }
    })
})
app.put("/cart/:prodCode",function(req,res){
    let prodCode=req.params.prodCode
    let body=req.body
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)console.log(err)
        else{
            let index=addToCart.findIndex(n=>n.prodCode===prodCode)
            addToCart[index]={...body}
            res.send(addToCart)
        }
    })
})
app.delete("/cart/:prodCode",function(req,res){
    let prodCode=req.params.prodCode
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)console.log(err)
        else{
            let index=addToCart.findIndex(n=>n.prodCode===prodCode)
            addToCart.splice(index,1)
            res.send(addToCart)
        }
    })
})