let express=require("express");
var cors = require('cors')
var bodyParser = require('body-parser')
let app=express();
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({ limit: '50mb' }))

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
const port=2410;

app.listen(port,()=>console.log(`Node app listening on port ${port}!`));

let {contacts,msg}=require("./watsappData.js");
let fs=require("fs");
let fname1="contacts.json";
let fname2="msg2.json";

let arr=[]
function showUrlMethod(req,res,next){
    let a={Url : `${req.url}`, Method : `${req.method}`}
    arr.push(a)
    
    console.log(`Url : ${req.url} Method : ${req.method}`)
    
    next();
}



app.get("/",function(req,res){
    let data1=JSON.stringify(contacts)
    let data2=JSON.stringify(msg)

    fs.writeFile(fname1,data1,function(err){
        if(err) res.status(404).send(err)
        fs.writeFile(fname2,data2,function(err){
            if(err) res.status(404).send(err)
            else res.send("Data in file is reset")
        })
    })
})
app.post("/login",function(req,res){
    let data1=JSON.stringify(contacts)
    let data2=JSON.stringify(msg)
    let body=req.body

    fs.writeFile(fname1,data1,function(err){
        if(err) res.status(404).send(err)
        fs.writeFile(fname2,data2,function(err){
            if(err) res.status(404).send(err)
            else res.send(body)
        })
    })
})
app.get("/friends",function(req,res){
    fs.readFile(fname1,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else {
            res.send({data})
        }
    })
})


app.post("/send",function(req,res){
    let data=JSON.stringify(contacts)
    
    let body=req.body
    fs.readFile(fname2,"utf8",function(err,data1){
        if(err)res.status(404).send(err)
        else{ 
            let shopArray=JSON.parse(data1)   
            shopArray.push(body) 
            let data2=JSON.stringify(shopArray)       
            fs.writeFile(fname2,data2,function(err){
                if(err) res.status(404).send(err)
                else res.send(shopArray)
            })
        }
    })
    
})
app.put("/friendList/:phone",function(req,res){
    let data1=JSON.stringify(contacts)
    let phone=req.params.phone
    let body=req.body
    console.log("BODY",body)
    fs.readFile(fname1,"utf8",function(err,data1){
        if(err)res.status(404).send(err)
        else{ 
            let shopArray=JSON.parse(data1)   
            let index=shopArray.findIndex(n=>n.phone==phone)
            shopArray[index].lastMsg=body.lastMsg
            let data2=JSON.stringify(shopArray)       
            fs.writeFile(fname1,data2,function(err){
                if(err) res.status(404).send(err)
                else res.send(shopArray)
            })
        }
    })
    
})
app.get("/contacts",function(req,res){
    fs.readFile(fname1,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let d1=JSON.parse(data)
            fs.readFile(fname2,"utf8",function(err,data1){
                if(err)res.status(404).send(err)
                else{
                    let shopArray=JSON.parse(data1)
                    res.send({data1:d1,data2:shopArray})
                }
            })
        }
    })
})
app.get("/:phone",function(req,res){
    let phone=req.params.phone
    fs.readFile(fname2,"utf8",function(err,data1){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data1)
            console.log(shopArray)
            fs.readFile(fname1,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let shopArray1=JSON.parse(data)
                    
                    let find1=shopArray1.find(n=>n.phone==phone)
                    res.send({data1:shopArray,data2:find1})
                }
            })
        }
    })
})
/*app.put("/send/:id",function(req,res){
    let id=req.params.id
    let body=req.body
    console.log(body,"body")
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            let index=shopArray.findIndex(n=>n.id==id)
            let find=shopArray.find(n=>n.id==id)
            find['msg'].push(body)
            shopArray[index]=find
            let data1=JSON.stringify(shopArray)
            fs.writeFile(fname2,data1,function(err){
                if(err) res.status(404).send(err)
                else {
                    fs.readFile(fname1,"utf8",function(err,data){
                        if(err)res.status(404).send(err)
                        else{
                            let shop=JSON.parse(data)
                            let index=shop.findIndex(n=>n.id==id)
                            let find=shop.find(n=>n.id==id)
                            find['msgTo']=body.msgTo
                            find['time']=body.timeTo
                            shop[index]=find
                            let data2=JSON.stringify(shop)
                            fs.writeFile(fname1,data2,function(err){
                                if(err) res.status(404).send(err)
                                else {
                                    res.send(shopArray)
                                }
                            })
                        }
                    })
                }
            })
        }
    })
    
})*/

app.delete("/chat/:id",function(req,res){
    let id=req.params.id
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let shopArray=JSON.parse(data)
            let find=shopArray.find(n=>n.id==id)
            let index=shopArray.findIndex(n=>n.id==id)
            if(find){
                let delStu={id:id,msg:[]}
                shopArray[index]=delStu
                let d=JSON.stringify(shopArray)
                fs.writeFile(fname2,d,function(err){
                    if(err)res.status(404).send(err)
                    fs.readFile(fname1,"utf8",function(err,data){
                        if(err)res.status(404).send(err)
                        else{
                            let shopArray=JSON.parse(data)
                            let find=shopArray.find(n=>n.id==id)
                            let index=shopArray.findIndex(n=>n.id==id)
                            if(find){
                                let a={id:find.id,name:find.name,img:find.img,msgfrom:"",msgTo:"",time:""}
                                shopArray[index]=a
                                let d=JSON.stringify(shopArray)
                                fs.writeFile(fname1,d,function(err){
                                    if(err)res.status(404).send(err)
                                    else res.send(delStu)
                                })
                            }
                            else res.status(404).send("No Data Found")
                        }
                    })
                })
            }
            else res.status(404).send("No Data Found")
        }
    })
})