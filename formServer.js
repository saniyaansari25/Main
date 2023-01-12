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
    console.log(body)
    let {method,fetchURL,data}=body
    if(method=='POST')
    {
        axios
        .post(`${fetchURL}`,data)
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
            else res.status(404).send(err);
        })
    }
    if(method=='GET')
    {
        axios
        .get(`${fetchURL}`)
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
            else res.status(404).send(err);
        })
    }
    
})
