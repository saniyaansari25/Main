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
//const port=2410;
var port=process.env.PORT || 2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));

let {students}=require("./dataNode.js");
let fs=require("fs")
let fname="students.json"

app.get("/testServer/students",async function(req,res){
    try{
        let data1=JSON.stringify(students)
        await fs.promises.writeFile(fname,data1)
        let data=await fs.promises.readFile(fname,"utf8")
        console.log(data)
        let obj=JSON.parse(data)
        res.send(obj);
    }
    catch(err){
        res.send(err)
    }
})
app.get("/testServer/students/:id",async function(req,res){
    let {id}=req.params
    console.log(id)
    try{
        let index=students.findIndex(n=>n.id==id)
        let a=students[index]
        console.log(a)
        res.send(a);
    }
    catch(err){
        res.send(err)
    }
})
app.get("/testServer/students/course/:name",async function(req,res){
    let {name}=req.params
    console.log(name)
    try{
        let a=students.filter(n=>n.course==name)
        console.log(a)
        res.send(a);
    }
    catch(err){
        res.send(err)
    }
})
app.post("/testServer/students",async function(req,res){
    let body=req.body
    let newStudent={...body}
    try{
        students.push(newStudent)
        let data1=JSON.stringify(students)
        await fs.promises.writeFile(fname,data1)
        res.send(newStudent)
    }
    catch(err){
        res.send(err)
    }
})
