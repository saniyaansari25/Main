let express=require("express");
let passport=require("passport");
let jwt=require("jsonwebtoken");
let JWTStrategy=require("passport-jwt").Strategy;
let ExtractJWT=require("passport-jwt").ExtractJwt;
let {students}=require("./dataNode.js");

let app=express();
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Expose-Headers","X-Auth-Token")
    res.header("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, OPTIONS");
    next();
});
app.use(showUrlMethod)
app.use(passport.initialize())

const port=2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));

let arr=[]
function showUrlMethod(req,res,next){
    let a={Url : `${req.url}`, Method : `${req.method}`}
    arr.push(a)
    
    console.log(`Url : ${req.url} Method : ${req.method}`)
    
    next();
}

const params={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "jwtsecret23647832"
}
const jwtExpirySeconds=300;

let strategyAll= new JWTStrategy(params,function(token,done){
    console.log("In JWTStrategy-All",token)
    let user=students.find(n=>n.id==token.id)
    
    console.log("user",user)
    if(!user) return done(null,false,{message:"Incorrect username or password"});
    else return done(null,students)
})

let strategyAdmin= new JWTStrategy(params,function(token,done){
    console.log("In JWTStrategy-All",token)
    let user=students.find(n=>n.id==token.id)
    
    console.log("user",user)
    if(!user) return done(null,false,{message:"Incorrect username or password"});
    else if (user.role!=="admin") return done(null,false,{message:"You do not have admin role"})
    else return done(null,user)
})
passport.use("roleAll",strategyAll)

passport.use("roleAdmin",strategyAdmin)

app.post("/testServer/getToken",function(req,res){
    let {id,name}=req.body
    let user=students.find(n=>n.name==name && n.id==id)
    if(user){
        let payload={id:user.id}
        let token=jwt.sign(payload,params.secretOrKey,{
            algorithm :"HS256",
            expiresIn : jwtExpirySeconds
        })
        res.send({token: "bearer "+token });
        res.setHeader("authorization", token)
        console.log(token)
        
        //res.send(payload)
    }
    else res.sendStatus(401)
})
app.get("/testServer/students",passport.authenticate("roleAll",{session:false}),function(req,res){
    console.log("In GET /user",req.user)
    res.send(req.user)
})
app.get("/testServer/students/:id",passport.authenticate("roleAdmin",{session:false}),function(req,res){
    
    console.log("In GET /id",req.user)
    res.send(req.user)
})
app.get("/testServer/students/course/:name",passport.authenticate("roleAll",{session:false}),function(req,res){
    let name=req.params.name
    console.log(name)
    console.log("user",req.user)
    let s=req.user.filter(n=>n.course==name)
    console.log("In GET /course",s)
    res.send(s)
})
app.post("/testServer/students",passport.authenticate("roleAll",{session:false}),function(req,res){
    let body=req.body
    req.user.push(body)
    console.log("In GET /user",body)
    res.send(body)
})
app.put("/testServer/students/:id",passport.authenticate("roleAll",{session:false}),function(req,res){
    let id=+req.params.id
    let body=req.body
    let index=+req.user.findIndex(n=>n.id===id)
    req.user[index]=body
    console.log("In PUT /put",body)
    res.send(req.user[index])
    
})
app.delete("/testServer/students/:id",passport.authenticate("roleAll",{session:false}),function(req,res){
    let id=+req.params.id
    let index=req.user.findIndex(n=>n.id===id)
    req.user.splice(index,1)
    console.log("In DELETE",req.user)
    res.send(req.user)
})
app.get("/allRequests",function(req,res){
    console.log("In the route : GET /allRequests")
    res.send({route : "/allRequests",user:req.user,arr:arr})
})
app.get("/allRequests/:method",function(req,res){
    let method=req.params.method
    let a=arr.filter(n=>n.Method==method)
    console.log("In the route : GET /allRequests")
    res.send({route : "/allRequests",user:req.user,arr:a})
})