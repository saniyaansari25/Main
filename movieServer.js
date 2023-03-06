let express=require("express");
let app=express();
app.use(express.json());
app.use(function(req, res, next){
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
});
//const port=2410;
var port=process.env.PORT || 2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));
let { data,movieHall }=require("./movieData.js");
console.log(movieHall)
let fs=require("fs");
let fname="movie.json";
let fname1="movieHall.json";

app.get("/",function(req,res){
    let data1=JSON.stringify(data)
    let data2=JSON.stringify(movieHall)
    fs.writeFile(fname,data1,function(err){
        if(err) res.status(404).send(err)
        fs.writeFile(fname1,data2,function(err){
            if(err) res.status(404).send(err)
            else res.send("Data in file is reset")
        })
    })
})
app.get("/movies/:city/:id",function(req,res){
    let city=req.params.city
    let id=req.params.id

    
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err)
        else {
            let studentsArray=JSON.parse(data)
            let student=studentsArray.filter(st=>st.city===city && st.id==id)
            if(student){
                fs.readFile(fname1,"utf8",function(err,data){
                    if(err) res.status(404).send(err)
                    else {
                        let studentsArray=JSON.parse(data)
                        let a={student:student,Array:studentsArray}
                        res.send(a)
                    }
                })
                //res.send(student)
            }
            else console.log(err)
        }
    })
})
app.get("/movies",function(req,res){
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err)
        else {
            let studentsArray=JSON.parse(data)
            res.send(studentsArray)
        }
    })
})

app.get("/moviehall",function(req,res){
    fs.readFile(fname1,"utf8",function(err,data){
        if(err) res.status(404).send(err)
        else {
            let studentsArray=JSON.parse(data)
            res.send(studentsArray)
        }
    })
})
app.get("/movies/:city",function(req,res){
    let city=req.params.city
    let q=req.query.q
    let lang=req.query.lang
    let format=req.query.format
    let genre=req.query.genre

    console.log(lang)
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err)
        else {
            let studentsArray=JSON.parse(data)
            let student=studentsArray.filter(st=>st.city===city)
            if(q){
                student=student.filter(n=>n.title==q)
            }
            if(lang){
                student=student.filter(n=>n.Language==lang)
            }
            if(format){
                student=student.filter(n=>n.format==format)
            }
            if(genre){
                student=student.filter(n=>n.Genre==genre)
            }
            if(student)res.send(student)
            else console.log(err)
        }
    })
})
app.get("/home/:city",function(req,res){
    let city=req.params.city
    let q=req.query.q
    let lang=req.query.lang
    let format=req.query.format
    let genre=req.query.genre

    console.log(lang)
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err)
        else {
            let studentsArray=JSON.parse(data)
            let student=studentsArray.filter(st=>st.city===city)
            if(q){
                student=student.filter(n=>n.title==q)
            }
            if(lang){
                student=student.filter(n=>n.Language==lang)
            }
            if(format){
                student=student.filter(n=>n.format==format)
            }
            if(genre){
                student=student.filter(n=>n.Genre==genre)
            }
            if(student)res.send(student)
            else console.log(err)
        }
    })
})
app.post("/seat",function(req,res){
    let body=req.body
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err)
        let studentsArray=JSON.parse(data)
        let maxid=studentsArray.reduce((acc,curr)=>curr.id>acc ? curr.id : acc,0)
        let nweid=maxid+1
        let newStudent={...body,id:nweid}
        studentsArray.push(newStudent)
        let data1=JSON.stringify(studentsArray)
        fs.writeFile(fname,data1,function(err){
            if(err) res.status(404).send(err)
            else res.send(newStudent)
        })
    })
})
app.post("/login",function(req,res){
    let body=req.body
    let email=req.body.email
    if(email=='test@test.com')
    {
        res.send(body)
    }
})