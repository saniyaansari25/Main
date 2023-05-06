let express=require("express");
var cors = require('cors')
let app=express();
app.use(express.json());

app.use(cors())
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});
app.use(showUrlMethod)
//const port=2410;
var port=process.env.PORT || 2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));
let { brand,mobiles,review,pincode }=require("./flipData.js");
let cart=[]
let wishList=[]
let comp=[]

let fs=require("fs");
let fname1="brand.json";
let fname2="mobiles.json";
let fname3="review.json";
let fname4="pincode.json";
let fname5="cart090.json";
let fname6="wishList040.json"
let fname7="comp040.json"

let arr=[]
function showUrlMethod(req,res,next){
    let a={Url : `${req.url}`, Method : `${req.method}`}
    arr.push(a)
    
    console.log(`Url : ${req.url} Method : ${req.method}`)
    
    next();
}
app.get("/",function(req,res){
    let data1=JSON.stringify(brand)
    let data2=JSON.stringify(mobiles)
    let data3=JSON.stringify(review)
    let data4=JSON.stringify(pincode)
    let data5=JSON.stringify(cart)
    let data6=JSON.stringify(wishList)
    let data7=JSON.stringify(comp)

    fs.writeFile(fname1,data1,function(err){
        if(err) res.status(404).send(err)
        fs.writeFile(fname2,data2,function(err){
            if(err) res.status(404).send(err)
            fs.writeFile(fname3,data3,function(err){
                if(err) res.status(404).send(err)
                fs.writeFile(fname4,data4,function(err){
                    if(err) res.status(404).send(err)
                    fs.writeFile(fname5,data5,function(err){
                        if(err) res.status(404).send(err)
                        fs.writeFile(fname6,data6,function(err){
                            if(err) res.status(404).send(err)
                            fs.writeFile(fname7,data7,function(err){
                                if(err) res.status(404).send(err)
                                else res.send("Data in file is reset")
                            })
                        })
                    })
                })
            })
        })
    })
})
app.post("/products",function(req,res){
    let body=req.body
    console.log("body",body.length)
    
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let Array=JSON.parse(data)

        let newItem={...body}
        console.log("New",body)

        if(body.length==1) Array.push(body[0]) 
        if(body.length==2){
            Array.push(body[0]) 
            Array.push(body[1]) 
        }
        if(body.length==3){
            Array.push(body[0]) 
            Array.push(body[1]) 
            Array.push(body[2]) 
        }
        if(body.length==4){
            Array.push(body[0]) 
            Array.push(body[1]) 
            Array.push(body[2]) 
            Array.push(body[3]) 
        }
        if(body.length==5){
            Array.push(body[0]) 
            Array.push(body[1]) 
            Array.push(body[2]) 
            Array.push(body[3]) 
            Array.push(body[4]) 
        }
        let d1=JSON.stringify(Array)
        fs.writeFile(fname2,d1,function(err){
            if(err)res.status(404).send(err)
            else res.send(newItem)
        })
    })
    
})
app.post("/product",function(req,res){
    let body=req.body
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let Array=JSON.parse(data)
        let newItem={...body}
        Array.push(newItem)
        let d1=JSON.stringify(Array)
        fs.writeFile(fname2,d1,function(err){
            if(err)res.status(404).send(err)
            else res.send(newItem)
        })
    })
})
app.get("/allRequests",function(req,res){
    console.log("In the route : GET /allRequests")
    res.send({route : "/allRequests",user:req.user,arr:arr})
})
app.post("/login",function(req,res){
    let body=req.body
    let email=req.body.email
    let password=req.body.password
    console.log(body)
    res.send(body)
    
})
/*app.post("/login",function(req,res){
    let body=req.body
    let email=req.body.email
    let password=req.body.password
    console.log(body)
    if(email=='test@gmail.com' && password=='test123')
    {
        res.send(body)
    }
    else if(email=='admin@gmail.com' && password=='admin123')
    {
        res.send(body)
    }
})*/
app.post("/wishList",function(req,res){
    let body=req.body
    fs.readFile(fname6,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let Array=JSON.parse(data)
        let newItem={...body}
        Array.push(newItem)
        let d1=JSON.stringify(Array)
        fs.writeFile(fname6,d1,function(err){
            if(err)res.status(404).send(err)
            else res.send(newItem)
        })
    })
})
app.get("/wishList",function(req,res){
    fs.readFile(fname6,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            res.send(shopArray)
        }
    })
})
app.delete("/wishList/:id",function(req,res){
    let id=req.params.id
    fs.readFile(fname6,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            let find=shopArray.find(n=>n.id==id)
            let index=shopArray.findIndex(n=>n.id==id)
            if(find){
                let delStu=shopArray.splice(index,1)
                let d=JSON.stringify(shopArray)
                fs.writeFile(fname6,d,function(err){
                    if(err)res.status(404).send(err)
                    else res.send(delStu)
                })
            }
            else res.status(404).send("No Data Found")
        }
    })
})
app.post("/compare",function(req,res){
    let body=req.body
    fs.readFile(fname7,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let Array=JSON.parse(data)
        let newItem={...body}
        if(Array.length<3)Array.push(newItem)
        let d1=JSON.stringify(Array)
        fs.writeFile(fname7,d1,function(err){
            if(err)res.status(404).send(err)
            else res.send(newItem)
        })
    })


    /*let body=req.body
    let newShop={...body}
    comp.push(newShop)
    let dataA=JSON.stringify(comp)
    fs.writeFile(fname7,dataA,function(err){
        if(err)res.status(404).send(err)
        else res.send(comp)
    })*/
})
app.delete("/compare/:id",function(req,res){
    let id=req.params.id
    fs.readFile(fname7,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            let find=shopArray.find(n=>n.id==id)
            let index=shopArray.findIndex(n=>n.id==id)
            if(find){
                let delStu=shopArray.splice(index,1)
                let d=JSON.stringify(shopArray)
                fs.writeFile(fname7,d,function(err){
                    if(err)res.status(404).send(err)
                    else res.send(delStu)
                })
            }
            else res.status(404).send("No Data Found")
        }
    })
})
app.get("/compare",function(req,res){
    fs.readFile(fname7,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            res.send(shopArray)
        }
    })
})
app.post("/cart",function(req,res){
    let body=req.body
    fs.readFile(fname5,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let Array=JSON.parse(data)
        let newItem={...body}
        Array.push(newItem)
        let d1=JSON.stringify(Array)
        fs.writeFile(fname5,d1,function(err){
            if(err)res.status(404).send(err)
            else res.send(newItem)
        })
    })
})
app.get("/cart",function(req,res){
    fs.readFile(fname5,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            res.send(shopArray)
        }
    })
})
app.put("/cart/:id/edit",function(req,res){
    let id=req.params.id
    let body=req.body
    fs.readFile(fname5,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let productArray=JSON.parse(data)
            let find=productArray.find(n=>n.id==id)
            let index=productArray.findIndex(n=>n.id==id)
            if(find)
            {
                
                let updatedProduct={...productArray[index],...body}
                productArray[index]=updatedProduct
                let data1=JSON.stringify(productArray)
                fs.writeFile(fname5,data1,function(err){
                    if(err)res.status(404).send(err)
                    else res.send(productArray)
                })
            }
            else res.status(404).send("No data Found")
        }
    })
})
app.delete("/cart/:id",function(req,res){
    let id=req.params.id
    fs.readFile(fname5,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            let find=shopArray.find(n=>n.id==id)
            let index=shopArray.findIndex(n=>n.id==id)
            if(find){
                let delStu=shopArray.splice(index,1)
                let d=JSON.stringify(shopArray)
                fs.writeFile(fname5,d,function(err){
                    if(err)res.status(404).send(err)
                    else res.send(delStu)
                })
            }
            else res.status(404).send("No Data Found")
        }
    })
})

app.get("/deals",function(req,res){
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            res.send(shopArray)
        }
    })
})
app.put("/products/:id/edit",function(req,res){
    let id=req.params.id
    let body=req.body
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let productArray=JSON.parse(data)
            let find=productArray.find(n=>n.id==id)
            let index=productArray.findIndex(n=>n.id==id)
            if(find)
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
        }
    })
})
app.get("/product/:productId",function(req,res){
    let productId=req.params.productId
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            let student=shopArray.filter(st=>st.id===productId )
            fs.readFile(fname1,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let shopArray1=JSON.parse(data)
                    res.send({product:student,brand:shopArray1})
                }
            })
        }
    })
})

app.get("/reviews/:productId",function(req,res){
    let productId=req.params.productId
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            let student=shopArray.filter(st=>st.mobileId===productId )
            res.send(student)
        }
    })
})
app.get("/pincode/:pincode/:productId",function(req,res){
    let pincode=req.params.pincode
    console.log(pincode)
    let productId=req.params.productId
    fs.readFile(fname4,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            let student=shopArray.find(st=>st.pincode==pincode)
            if(student){
                let disp=student.mobileList.find(n=>n.id==productId)
                console.log(student)
                console.log(disp)
                res.send(disp)
            }
        }
    })
})
app.get("/products/:category",function(req,res){
    let category=req.params.category

    let page=req.query.page
    let ram=req.query.ram
    let rating=req.query.rating
    let price=req.query.price
    let sort=req.query.sort
    

console.log(ram)
console.log("PRICE",price)
console.log("RATING",rating)
console.log("SORT",sort)

    let size=5
    if(!page)page=1
    const limit = parseInt(size);
    fs.readFile(fname2,"utf8",function(err,data){
        if(err) res.status(404).send(err)
        else {
            let studentsArray=JSON.parse(data)
            let student= category ? studentsArray.filter(st=>st.category===category ) : studentsArray
            if(page){
                if(ram){
                   student=student.filter(st=>st.ram==ram)
                }
                if(rating){
                    student=student.filter(st=>st.rating==rating )
                }
                if(price){
                    if(price=='0-5000')student=student.filter(st=>st.price>0 && st.price<5000)
                    if(price=='5000-10000')student=student.filter(st=>st.price>5000 && st.price<10000)
                    if(price=='10000-20000')student=student.filter(st=>st.price>10000 && st.price<20000)
                    if(price=='20000')student=student.filter(st=>st.price>20000 || st.price==20000)
                }
                if(sort){
                    if(sort=='asc')student=student.sort((a,b)=>a.price-b.price)
                    if(sort=='desc')student=student.sort((a,b)=>b.price-a.price)
                    if(sort=='popularity-asc')student=student.sort((a,b)=>a.popularity-b.popularity)
                    if(sort=='popularity-desc')student=student.sort((a,b)=>b.popularity-a.popularity)
                }
                res.send(makeData(page, size, student));
            }
            else console.log(err)
        }
    })
})
app.get("/products/:category/:brand",function(req,res){
    let category=req.params.category
    let brand=req.params.brand 

    let page=req.query.page
    let ram=req.query.ram
    let rating=req.query.rating
    let price=req.query.price
    let sort=req.query.sort

    let size=5
    if(!page)page=1
    const limit = parseInt(size);
    fs.readFile(fname2,"utf8",function(err,data){
        if(err) res.status(404).send(err)
        else {
            let studentsArray=JSON.parse(data)
            console.log(studentsArray.length,"LENGTH")
            //let student=studentsArray.filter(st=>st.category===category && st.brand===brand)
            let student=studentsArray.filter(st=>st.brand===brand)
            if(page){
               res.send(makeData(page, size, student));
            }
            else console.log(err)
        }
    })
})
let makeData = (pageNum, size, data1) => {
    let startIndex = (pageNum - 1) * size;
    let endIndex =
      data1.length > startIndex + size - 1
        ? startIndex + size - 1
        : data1.length - 1;
    let data2 = data1.filter(
      (lt, index) => index >= startIndex && index <= endIndex
    );
    let dataFull = {
      startIndex: data1.length > 0 ? startIndex + 1 : 0,
      endIndex: data1.length > 0 ? endIndex + 1 : 0,
      numOfItems: data1.length,
      persons: data2,
    };
    return dataFull;
  };