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
        "Origin, X-Requested-With, Content-Type,Accept"
    );
    next();
});
const port=2410;
app.listen(port,()=>console.log(`Listening on port ${port}!`));

let {studentsData}=require("./studentsData.js")

app.get("/svr/students",function(req,res){
    let courseStr=req.query.course
    let grade=req.query.grade
    let sort=req.query.sort
    let arr1=studentsData
    
    if(courseStr)
    {
        let courseArr=courseStr.split(",")
        arr1=arr1.filter(n=>courseArr.find(c1=>c1===n.course))
    }
    if(grade){
        arr1=arr1.filter(n=>n.grade===grade)
    }
    if(sort==="name")
    {
        arr1.sort((n1,n2)=>n1.name.localeCompare(n2.name))
    }
    if(sort==="course")
    {
        arr1.sort((n1,n2)=>n1.course.localeCompare(n2.course))
    }
    res.send(arr1)
})

app.get("/svr/students/:id",function(req,res){
    let id=+req.params.id
    let student=studentsData.find(n=>n.id===id)
    if(student) res.send(student)
    else{
        res.status(404).send("No Student Found")
    }
})

app.get("/svr/students/course/:name",function(req,res){
    let name=req.params.name
    const arr1=studentsData.filter(n=>n.course===name)
    res.send(arr1)
})
app.post("/svr/students",function(req,res){
    let body=req.body
    console.log(body)
    let maxId=studentsData.reduce((acc,curr)=>curr.id>=acc ? curr.id : acc,0)
    let newId=maxId+1
    let newStudent={id:newId,...body}
    studentsData.push(newStudent)
    res.send(newStudent)
})
app.put("/svr/students/:id",function(req,res){
    let id=+req.params.id
    let body=req.body
    let index=studentsData.findIndex(n=>n.id==id)
    if(index>=0) 
    {
        let updatedStudent={id:id,...body}
        studentsData[index]=updatedStudent
        res.send(updatedStudent)
    }
    else{
        res.status(404).send("No Student Found")
    }
})
app.delete("/svr/students/:id",function(req,res){
    let id=+req.params.id
    let index=studentsData.findIndex(n=>n.id==id)
    if(index>=0)
    {
        let deletedStudent=studentsData.splice(index,1)
        res.send(deletedStudent)
    }
    else{
        res.status(404).send("No Student Found")
    }
})