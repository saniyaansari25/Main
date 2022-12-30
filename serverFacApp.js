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
var port=process.env.PORT || 2450;
//const port=2450;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));

let {data}=require("./serverFacData.js")
let {customers,courses,faculties,classes,students }=data

let fs=require("fs")
let fname1="customers.json"
let fname2="courses.json"
let fname3="faculties.json"
let fname4="classes.json"
let fname5="students.json"

app.post("/login",function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    console.log(customers)
    var cust = customers.find(function(item) {
        return item.email=== email && item.password === password;
    });

    console.log(cust);
    var custRec= {
    name: cust.name,
    email: cust.email,
    role: cust.role
  }
  
    let data1=JSON.stringify(customers)
    let data2=JSON.stringify(customers)
    let data3=JSON.stringify(customers)
    let data4=JSON.stringify(customers)
    let data5=JSON.stringify(customers)
    fs.writeFile(fname1,data1,function(err){
        if(err)res.status(404).send(err)
        fs.writeFile(fname2,data2,function(err){
            if(err)res.status(404).send(err)
            fs.writeFile(fname3,data3,function(err){
                if(err)res.status(404).send(err)
                fs.writeFile(fname4,data4,function(err){
                    if(err)res.status(404).send(err)
                    fs.writeFile(fname5,data5,function(err){
                        if(err)res.status(500).send(err)
                        else res.send(custRec);
                    })
                })
            })
        })
    })
})
app.post("/register",function(req,res){
    let body=req.body
    var custRec= {
        name: req.body.name,
        role: req.body.role,
        email: req.body.email
      }
    fs.readFile(fname1,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let customersArray=JSON.parse(data)
        let maxid=customersArray.reduce((acc,curr)=>curr.custId>acc ? curr.custId : acc,0)
        let newid=maxid+1
        let newcustomer={...body,custId:newid}

        let maxStid=students.reduce((acc,curr)=>curr.id>acc ? curr.id : acc,0)
        let Stid=maxStid+1
        if(newcustomer.role=='student')students.push({id:Stid,name:newcustomer.name})

        customersArray.push(newcustomer)
        let dataA=JSON.stringify(customersArray)
        fs.writeFile(fname1,dataA,function(err){
            if(err)res.status(404).send(err)
            else res.send(custRec)
        })
    })
})
app.get("/getFacultyNames",function(req,res){
    fs.readFile(fname3,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let facultiesArray=faculties.map(n=>n.name)
            res.send(facultiesArray)
        }
    })
})
app.get("/getStudentNames",function(req,res){
    fs.readFile(fname5,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
            let studentsArray=JSON.parse(data)
            let Array=students.map(n=>n.name)
            fs.readFile(fname3,"utf8",function(err,data){
                if(err)res.status(404).send(err)
                else{
                    let facultiesArray=faculties.map(n=>n.name)
                    let A={StArray:Array,FcArray:facultiesArray}
                    res.send(A)
                }
            })
        }
    })
})
app.get("/getCourses",function(req,res){
    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
           res.send(courses)
        }
    })
})
app.get("/getClass/:classId",function(req,res){
    let classId=req.params.classId
    let c=classes.find(n=>n.classId==classId)
    fs.readFile(fname4,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        else{
           res.send(c)
        }
    })
})
app.put("/putCourse",function(req,res){
    let courseId=+req.body.courseId
    let body=req.body
    let studentArr=req.body.students
    let facultyArr=req.body.faculty

    let st=studentArr.map(n=>students.find(m=>m.name==n))
    let fc=facultyArr.map(n=>faculties.find(m=>m.name==n))
    console.log(fc)

    let c=courses.find(n=>n.courseId==courseId)
    let a=c.name
    console.log(a)
    let A=st.map(n=>n.courses.find(m=>m==a) ? "" : n.courses.push(a))
    let B=fc.map(n=>n.courses.find(m=>m==a) ? "" : n.courses.push(a))
    console.log(fc)
    console.log(B)

    fs.readFile(fname2,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let productArray=JSON.parse(data)
        let index=courses.findIndex(n=>n.courseId==courseId)
        if(index>=0)
        {
            let updatedcourses={...courses[index],...body}
            courses[index]=updatedcourses
            let data1=JSON.stringify(courses)
            fs.writeFile(fname2,data1,function(err){
                if(err)res.status(404).send(err)
                else res.send(updatedcourses)
            })
        }
        else res.status(404).send("No data Found")
    })
})
app.get("/getStudents",function(req,res){
    let courses=req.query.courses
    let C=[]
    if(courses)
    {
        C=courses.split(",")
        console.log(C)
    }
    let list=students
    if(C.length==1)
    {
        list=students.filter(n=>n.courses.find(m=>m==courses))
    }
    else if(C.length==2)
    {
        list=students.filter(n=>n.courses.find(m=>m==C[0] || m==C[1]))
    }
    let resArr = pagination(list, parseInt(req.query.page));
    res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
})
app.get("/getFaculties",function(req,res){
    let courses=req.query.courses
    let C=[]
    if(courses)
    {
        C=courses.split(",")
        console.log(C)
    }
    let list=faculties
    if(C.length==1)
    {
        list=faculties.filter(n=>n.courses.find(m=>m==courses))
    }
    else if(C.length==2)
    {
        list=faculties.filter(n=>n.courses.find(m=>m==C[0] || m==C[1]))
    }
    let resArr = pagination(list, parseInt(req.query.page));
    res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
})
app.post("/postStudentDetails",function(req,res){
    let body=req.body
    var custRec= {
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        about: req.body.about
      }
      console.log(body)
    fs.readFile(fname5,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let studentsArray=JSON.parse(data)
        let maxid=students.reduce((acc,curr)=>curr.id>acc ? curr.id : acc,0)
        let newid=maxid+1
        let newstudent={...body,id:newid,courses:[]}
        students.push(newstudent)
        let dataA=JSON.stringify(studentsArray)
        fs.writeFile(fname5,dataA,function(err){
            if(err)res.status(404).send(err)
            else res.send(newstudent)
        })
    })
})
app.get("/getStudentDetails/:name",function(req,res){
    let name=req.params.name
    let list=students
    if(name)
    {
        list=students.find(n=>n.name==name)
    }
    res.send(list)
})
app.get("/getStudentCourse/:name",function(req,res){
    let name=req.params.name
    let list=students
    let list1=courses
    let l=[]
    if(name)
    {
        list=students.find(n=>n.name==name)
        if(list.courses.length==1)
        {
            l=list1.find(n=>n.name==list.courses[0])
        }
        if(list.courses.length==2)
        {
            l=list1.filter(n=>n.name==list.courses[0] || n.name==list.courses[1])
        }
        if(list.courses.length==3)
        {
            l=list1.filter(n=>n.name==list.courses[0] || n.name==list.courses[1] || n.name==list.courses[2])
        }
    }
    res.send(l)
})
app.get("/getStudentClass/:name",function(req,res){
    let name=req.params.name
    let list=students
    let list1=classes
    let l={}
    if(name)
    {
        let list=students.find(n=>n.name==name)
        if(list.courses.length==1)
        {
            l=list1.find(n=>n.course==list.courses[0])
        }
        if(list.courses.length==2)
        {
            l=list1.filter(n=>n.course==list.courses[0] || n.course==list.courses[1])
        }
        if(list.courses.length==3)
        {
            l=list1.filter(n=>n.course==list.courses[0] || n.course==list.courses[1] || n.course==list.courses[2])
        }
    }
    res.send(l)
})
app.get("/getFacultyCourse/:name",function(req,res){
    let name=req.params.name
    let list=faculties
    let list1=courses
    let l=[]
    if(name)
    {
        list=faculties.find(n=>n.name==name)
        if(list.courses.length==1)
        {
            l=list1.find(n=>n.name==list.courses[0])
        }
        if(list.courses.length==2)
        {
            l=list1.filter(n=>n.name==list.courses[0] || n.name==list.courses[1])
        }
        if(list.courses.length==3)
        {
            l=list1.filter(n=>n.name==list.courses[0] || n.name==list.courses[1] || n.name==list.courses[2])
        }
    }
    res.send(l)
})
app.get("/getFacultyClass/:name",function(req,res){
    let name=req.params.name
    let list=faculties
    let list1=classes
    let l={}
    if(name)
    {
        list=faculties.find(n=>n.name==name)
        if(list.courses.length==1)
        {
            l=list1.find(n=>n.course==list.courses[0])
        }
        if(list.courses.length==2)
        {
            l=list1.filter(n=>n.course==list.courses[0] || n.course==list.courses[1])
        }
        if(list.courses.length==3)
        {
            l=list1.filter(n=>n.course==list.courses[0] || n.course==list.courses[1] || n.course==list.courses[2])
        }
    }
    res.send(l)
})
app.put("/postClass/:classId",function(req,res){
    let classId=+req.params.classId
    let body=req.body
    fs.readFile(fname5,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let productArray=JSON.parse(data)
        let index=classes.findIndex(n=>n.classId==classId)
        if(index>=0)
        {
            let updatedclass={...classes[index],...body}
            classes[index]=updatedclass
            let data1=JSON.stringify(classes)
            fs.writeFile(fname5,data1,function(err){
                if(err)res.status(404).send(err)
                else res.send(updatedclass)
            })
        }
        else res.status(404).send("No data Found")
    })
})
app.post("/postClass",function(req,res){
    let body=req.body
    var custRec= {
        course: req.body.course,
        time: req.body.time,
        endTime: req.body.endTime,
        topic: req.body.topic,
        facultyName: req.body.facultyName
      }
      console.log(body)
    fs.readFile(fname5,"utf8",function(err,data){
        if(err)res.status(404).send(err)
        let classesArray=JSON.parse(data)
        let maxid=classes.reduce((acc,curr)=>curr.classId>acc ? curr.classId : acc,0)
        let newid=maxid+1
        let newclass={...body,classId:newid}
        classes.push(newclass)
        let dataA=JSON.stringify(classesArray)
        fs.writeFile(fname4,dataA,function(err){
            if(err)res.status(404).send(err)
            else res.send(newclass)
        })
    })
})

function pagination(obj, page) {
    const postCount = obj.length;
    const perPage = 10;
    //const pageCount = Math.ceil(postCount / perPage);
    var resArr = obj;
    resArr = resArr.slice(page * 3 - 3, page * 3);
    return resArr;
  }