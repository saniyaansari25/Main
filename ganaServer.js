let express=require("express");
let app=express();
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var port=process.env.PORT || 2410;
//const port=2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));

let {data}=require("./ganaData.js");
let fs=require("fs");
let fname1="song.json";

app.get("/ganna",function(req,res){
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