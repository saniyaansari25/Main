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

//const port=2410;
var port=process.env.PORT || 2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));

//let {data}=require("./ganaData.js");
let {trendingSongs}=require("./ganaData2.js");
let {newSongs}=require("./ganaData1.js");
let {oldSongs}=require("./ganaData3.js");

let fs=require("fs");

let fname1="song.json";
let fname2="trendingSongs.json";
let fname3="newSongs.json";
let fname4="oldSongs.json";

/*app.get("/ganna",function(req,res){
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
})*/
app.get("/oldSongs",function(req,res){
    let data1=JSON.stringify(oldSongs)
    fs.writeFile(fname4,data1,function(err){
        if(err)res.status(404).send(err)
        fs.readFile(fname4,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let furArray=JSON.parse(data)
                res.send(furArray)
            }
        })
    })
})
app.get("/newSongs",function(req,res){
    let data1=JSON.stringify(newSongs)
    fs.writeFile(fname3,data1,function(err){
        if(err)res.status(404).send(err)
        fs.readFile(fname3,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let furArray=JSON.parse(data)
                res.send(furArray)
            }
        })
    })
})
app.get("/trendingSongs",function(req,res){
    let data1=JSON.stringify(trendingSongs)
    fs.writeFile(fname2,data1,function(err){
        if(err)res.status(404).send(err)
        fs.readFile(fname2,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let furArray=JSON.parse(data)
                res.send(furArray)
            }
        })
    })
})

app.get("/:trend",function(req,res){
    let {trend}=req.params
    if(trend=='trend'){
        let data1=JSON.stringify(trendingSongs)
        fs.writeFile(fname2,data1,function(err){
            if(err)res.status(404).send(err)
            fs.readFile(fname2,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let furArray=JSON.parse(data)
                    res.send(furArray)
                }
            })
        })
    }
    else if(trend=='new'){
        let data1=JSON.stringify(newSongs)
        fs.writeFile(fname3,data1,function(err){
            if(err)res.status(404).send(err)
            fs.readFile(fname3,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let furArray=JSON.parse(data)
                    res.send(furArray)
                }
            })
        })
    }
    else if(trend=='old'){
        let data1=JSON.stringify(oldSongs)
        fs.writeFile(fname4,data1,function(err){
            if(err)res.status(404).send(err)
            fs.readFile(fname4,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let furArray=JSON.parse(data)
                    res.send(furArray)
                }
            })
        })
    }
})
/*
app.get("/trendingSongs",function(req,res){
    let data1=JSON.stringify(trendingSongs)
    fs.writeFile(fname2,data1,function(err){
        if(err)res.status(404).send(err)
        fs.readFile(fname2,"utf8",function(err,data){
            if(err)res.status(404).send(err)
            else{
                let furArray=JSON.parse(data)
                res.send(furArray)
            }
        })
    })
})*/
