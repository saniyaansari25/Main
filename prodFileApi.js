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
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
var port=process.env.PORT || 2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));

let {data}=require("./prodData.js")
let {shops,products,purchases}=data

let fs=require("fs")
let fname1="shops.json"
let fname2="products.json"
let fname3="purchases.json"

app.get("/reset",function(req,res){
    let data1=JSON.stringify(shops)
    fs.writeFile(fname1,data1,function(err){
        if(err)res.status(404).send(err)
        else {
            let data2=JSON.stringify(products)
            fs.writeFile(fname2,data2,function(err){
                if(err)res.status(404).send(err)
                else {
                    let data3=JSON.stringify(purchases)
                    fs.writeFile(fname3,data3,function(err){
                        if(err)res.status(404).send(err)
                        else res.send("Data in file is reset")
                    })
                }
            })
        }
    })
    
})
app.get("/shops",function(req,res){
    fs.readFile(fname1,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            res.send(shopArray)
        }
    })
})
app.post("/shops",function(req,res){
    let body=req.body
    fs.readFile(fname1,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let shopArray=JSON.parse(data)
        let maxid=shopArray.reduce((acc,curr)=>curr.shopId>acc ? curr.shopId : acc,0)
        let newid=maxid+1
        let newShop={...body,shopId:newid}
        shopArray.push(newShop)
        let dataA=JSON.stringify(shopArray)
        fs.writeFile(fname1,dataA,function(err){
            if(err)res.status(404).send(err)
            else res.send(shopArray)
        })
    })
})
app.get("/products",function(req,res){
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let productArray=JSON.parse(data)
            res.send(productArray)
        }
    })
})
app.post("/products",function(req,res){
    let body=req.body
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let productArray=JSON.parse(data)
        let maxid=productArray.reduce((acc,curr)=>curr.productId>acc ? curr.productId : acc,0)
        let newid=maxid+1
        let newProduct={...body,productId:newid}
        productArray.push(newProduct)
        let data1=JSON.stringify(productArray)
        fs.writeFile(fname2,data1,function(err){
            if(err)res.status(404).send(err)
            else res.send(productArray)
        })
    })
})
app.get("/products/:id",function(req,res){
    let id=+req.params.id
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let productArray=JSON.parse(data)
            let product=productArray.find(n=>n.productId==id)
            if(product)res.send(product)
            else res.status(404).send("No data found")
        }
    })
})
app.put("/products/:id",function(req,res){
    let id=+req.params.id
    let body=req.body
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let productArray=JSON.parse(data)
        let index=productArray.findIndex(n=>n.productId==id)
        if(index>=0)
        {
            let updatedProduct={...productArray[index],...body}
            productArray[index]=updatedProduct
            let data1=JSON.stringify(productArray)
            fs.writeFile(fname2,data1,function(err){
                if(err)res.status(404).send(err)
                else res.send(productArray)
            })
        }
        else res.status(404).send("No data Found")
    })
})
app.get("/purchases/shops/:id",function(req,res){
    let id=+req.params.id
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let purchaseArray=JSON.parse(data)
            let purchase=purchaseArray.filter(n=>n.shopId==id)
            if(purchase)res.send(purchase)
            else res.status(404).send("No Data Found")
        }
    })
})
app.get("/purchases",function(req,res){
    let productname=req.query.productname
    let sort=req.query.sort
    let shopname=req.query.shopname
    
    if (shopname)
    {
        let name=[shopname]
        console.log(name)
        fs.readFile(fname1,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let shopArray=JSON.parse(data)
                let shop=shopArray.find(n=>n.name==name[0])
                console.log("shop",shop)
                fs.readFile(fname3,"utf8",function(err,data){
                    if(err)res.status(404).send(err)
                    else{
                        let purchaseArray=JSON.parse(data)
                        let pur=purchaseArray.filter(n=>n.shopId==shop.shopId)
                        res.send(pur)
                    }
                })
            }
        })
    }
    else if (sort)
    {
        if(sort=='QtyAsc')
        {
            fs.readFile(fname3,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let purchaseArray=JSON.parse(data)
                    let purchase=purchaseArray.sort((a,b)=>(+a.quantity)-(+b.quantity))
                    res.send(purchase)
                }
            }) 
        }
        if(sort=='QtyDesc')
        {
            fs.readFile(fname3,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let purchaseArray=JSON.parse(data)
                    let purchase=purchaseArray.sort((a,b)=>(+b.quantity)-(+a.quantity))
                    res.send(purchase)
                }
            }) 
        }
        if(sort=='ValueAsc')
        {
            fs.readFile(fname3,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let purchaseArray=JSON.parse(data)
                    let purchase=purchaseArray.sort((a,b)=>(+a.quantity*a.price)-(+b.quantity*b.price))
                    res.send(purchase)
                }
            }) 
        }
        if(sort=='ValueDesc')
        {
            fs.readFile(fname3,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let purchaseArray=JSON.parse(data)
                    let purchase=purchaseArray.sort((a,b)=>(+b.quantity*b.price)-(+a.quantity*a.price))
                    res.send(purchase)
                }
            })
        }
    }
    
    else if(productname)
    {
        let p=productname.split(',')
        console.log(p)
        console.log(p.length)
        if(p.length==1)
        {
            fs.readFile(fname2,"utf8",function(err,data){
                if(err)console.log(err)
                else{
                    let productArray=JSON.parse(data)
                    let product=productArray.find(n=>n.productName==productname)
                    fs.readFile(fname3,"utf8",function(err,data){
                        if(err)console.log(err)
                        else{
                            let purchaseArray=JSON.parse(data)
                            let purchase=purchaseArray.filter(n=>n.productid==product.productId)
                            res.send(purchase)
                        }
                    }) 
                }
            }) 
        }
        if(p.length==2)
        {
            fs.readFile(fname2,"utf8",function(err,data){
                if(err)console.log(err)
                else{
                    let productArray=JSON.parse(data)
                    let product=productArray.filter(n=>n.productName==p[0] || n.productName==p[1])
                    fs.readFile(fname3,"utf8",function(err,data){
                        if(err)console.log(err)
                        else{
                            let purchaseArray=JSON.parse(data)
                            let purchase=purchaseArray.filter(n=>n.productid==product[0].productId || n.productid==product[1].productId) 
                            res.send(purchase)
                        }
                    }) 
                }
            }) 
        }
        if(p.length==3)
        {
            fs.readFile(fname2,"utf8",function(err,data){
                if(err)console.log(err)
                else{
                    let productArray=JSON.parse(data)
                    let product=productArray.filter(n=>n.productName==p[0] || n.productName==p[1] || n.productName==p[2])
                    fs.readFile(fname3,"utf8",function(err,data){
                        if(err)console.log(err)
                        else{
                            let purchaseArray=JSON.parse(data)
                            let purchase=purchaseArray.filter(n=>n.productid==product[0].productId || n.productid==product[1].productId || n.productid==product[2].productId) 
                            res.send(purchase)
                        }
                    }) 
                }
            }) 
        }
        if(p.length==4)
        {
            fs.readFile(fname2,"utf8",function(err,data){
                if(err)console.log(err)
                else{
                    let productArray=JSON.parse(data)
                    let product=productArray.filter(n=>n.productName==p[0] || n.productName==p[1] || n.productName==p[2]|| n.productName==p[3])
                    fs.readFile(fname3,"utf8",function(err,data){
                        if(err)console.log(err)
                        else{
                            let purchaseArray=JSON.parse(data)
                            let purchase=purchaseArray.filter(n=>n.productid==product[0].productId || n.productid==product[1].productId || n.productid==product[2].productId || n.productid==product[3].productId) 
                            res.send(purchase)
                        }
                    }) 
                }
            }) 
        }
        if(p.length==5)
        {
            fs.readFile(fname2,"utf8",function(err,data){
                if(err)console.log(err)
                else{
                    let productArray=JSON.parse(data)
                    let product=productArray.filter(n=>n.productName==p[0] || n.productName==p[1] || n.productName==p[2]|| n.productName==p[3]|| n.productName==p[4])
                    fs.readFile(fname3,"utf8",function(err,data){
                        if(err)console.log(err)
                        else{
                            let purchaseArray=JSON.parse(data)
                            let purchase=purchaseArray.filter(n=>n.productid==product[0].productId || n.productid==product[1].productId || n.productid==product[2].productId || n.productid==product[3].productId|| n.productid==product[4].productId) 
                            res.send(purchase)
                        }
                    }) 
                }
            }) 
        }
        if(p.length==6)
        {
            fs.readFile(fname2,"utf8",function(err,data){
                if(err)console.log(err)
                else{
                    let productArray=JSON.parse(data)
                    let product=productArray.filter(n=>n.productName==p[0] || n.productName==p[1] || n.productName==p[2]|| n.productName==p[3]|| n.productName==p[4]|| n.productName==p[5])
                    fs.readFile(fname3,"utf8",function(err,data){
                        if(err)console.log(err)
                        else{
                            let purchaseArray=JSON.parse(data)
                            let purchase=purchaseArray.filter(n=>n.productid==product[0].productId || n.productid==product[1].productId || n.productid==product[2].productId || n.productid==product[3].productId|| n.productid==product[4].productId|| n.productid==product[5].productId) 
                            res.send(purchase)
                        }
                    }) 
                }
            }) 
        }
    }
    else {
        fs.readFile(fname3,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let purchaseArray=JSON.parse(data)
                res.send(purchaseArray)
            }
        })
    }
    
})

app.get("/purchases/products/:id",function(req,res){
    let id=+req.params.id
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let purchaseArray=JSON.parse(data)
            let purchase=purchaseArray.filter(n=>n.productid==id)
            if(purchase)res.send(purchase)
            else res.status(404).send("No Data Found")
        }
    })
})
app.get("/totalPurchase/shop/:id",function(req,res){
    let id=+req.params.id
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let purchaseArray=JSON.parse(data)
           
            let purchase=purchaseArray.filter(n=>n.shopId==id)
            
            let pOne=purchase.filter(n=>n.productid==1)
            let sum1=pOne.reduce((acc,curr)=>acc+curr.quantity,0)

            let pTwo=purchase.filter(n=>n.productid==2)
            let sum2=pTwo.reduce((acc,curr)=>acc+curr.quantity,0)

            let pThree=purchase.filter(n=>n.productid==3)
            let sum3=pThree.reduce((acc,curr)=>acc+curr.quantity,0)

            let pFour=purchase.filter(n=>n.productid==4)
            let sum4=pFour.reduce((acc,curr)=>acc+curr.quantity,0)

            let pFive=purchase.filter(n=>n.productid==5)
            let sum5=pFive.reduce((acc,curr)=>acc+curr.quantity,0)

            let pSix=purchase.filter(n=>n.productid==6)
            let sum6=pSix.reduce((acc,curr)=>acc+curr.quantity,0)

            let pSeven=purchase.filter(n=>n.productid==7)
            let sum7=pSeven.reduce((acc,curr)=>acc+curr.quantity,0)

            let pEight=purchase.filter(n=>n.productid==8)
            let sum8=pEight.reduce((acc,curr)=>acc+curr.quantity,0)
            
            let totalpurchase=[
                {totalpurchase:sum1,productid:1},
                {totalpurchase:sum2,productid:2},
                {totalpurchase:sum3,productid:3},
                {totalpurchase:sum4,productid:4},
                {totalpurchase:sum5,productid:5},
                {totalpurchase:sum6,productid:6},
                {totalpurchase:sum7,productid:7},
                {totalpurchase:sum8,productid:8},
            ]
            if(sum1)res.send(totalpurchase)
            else res.status(404).send("No Data Found")
        }
    })
})
app.get("/totalPurchase/product/:id",function(req,res){
    let id=+req.params.id
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let purchaseArray=JSON.parse(data)
            let purchase=purchaseArray.filter(n=>n.productid==id)

            let pOne=purchase.filter(n=>n.shopId==1)
            let sum1=pOne.reduce((acc,curr)=>acc+curr.quantity,0)

            let pTwo=purchase.filter(n=>n.shopId==2)
            let sum2=pTwo.reduce((acc,curr)=>acc+curr.quantity,0)

            let pThree=purchase.filter(n=>n.shopId==3)
            let sum3=pThree.reduce((acc,curr)=>acc+curr.quantity,0)

            let pFour=purchase.filter(n=>n.shopId==4)
            let sum4=pFour.reduce((acc,curr)=>acc+curr.quantity,0)

            let totalpurchase=[
                {totalpurchase:sum1,shopId:1},
                {totalpurchase:sum2,shopId:2},
                {totalpurchase:sum3,shopId:3},
                {totalpurchase:sum4,shopId:4},
            ]
            if(sum1)res.send(totalpurchase)
            else res.status(404).send("No Data Found")
        }
    })
})
app.post("/purchases",function(req,res){
    let body=req.body
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let purchaseArray=JSON.parse(data)
        let maxid=purchaseArray.reduce((acc,curr)=>curr.purchaseId>acc ? curr.purchaseId : acc,0)
        let newid=maxid+1
        let newPurchase={...body,purchaseId:newid}
        purchaseArray.push(newPurchase)
        let data1=JSON.stringify(purchaseArray)
        fs.writeFile(fname3,data1,function(err){
            if(err)res.status(404).send(err)
            else res.send(purchaseArray)
        })
    })
})