
let express=require("express");
let app=express();
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
var port=process.env.PORT || 2410;
//const port=2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));
let axios=require("axios");

app.post("/testServer",function(req,res){

    let body=req.body
    let token=req.body.header
    console.log(body)
    console.log("TOKEN",token)
    
    //("authorization", token.authorization)
    let {method,fetchURL,data,header}=body
    if(method=='POST')
    {
        axios
        .post(`${fetchURL}`,data, { headers: { authorization: header.authorization } })
        .then(function(response){
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function(err){
            
            if(err.response){
                let {status,statusText}=err.response
                console.log(status,statusText);
                res.status(status).send(statusText)
            }
            else res.status(401).send(err);
        })
    }
    if(method=='GET')
    {
        axios
        .get(`${fetchURL}`,{headers:{authorization:header.authorization}})
        .then(function(response){
            res.setHeader("authorization", header.authorization)
            //req.setHeader("authorization", header.authorization)
            console.log("authorization", header.authorization)
            console.log("DATA",response.data)
            let payload={data:response.data}
            
            res.send(payload)
            //res.send(""+ response.data)
        })
        .catch(function(err){
            console.log("ERR",err)
            if(err.response){
                let {status,statusText}=err.response
                console.log(status,statusText);
                res.status(status).send(statusText)
            }
            //else res.sendStatus(status)
            else res.status(401).send(err);
        })
    }
    if(method=='PUT')
    {
        axios
        .put(`${fetchURL}`,data,{headers:{authorization:header.authorization}})
        .then(function(response){
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function(err){
            
            if(err.response){
                let {status,statusText}=err.response
                console.log(status,statusText);
                res.status(status).send(statusText)
            }
            else res.status(401).send(err);
        })
    }
    if(method=='DELETE')
    {
        axios
        .delete(`${fetchURL}`,{headers:{authorization:header.authorization}})
        .then(function(response){
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function(err){
            console.log(err)
            if(err.response){
                let {status,statusText}=err.response
                console.log(status,statusText);
                res.status(status).send(statusText)
            }
            else res.status(401).send(err);
        })
    }
})
