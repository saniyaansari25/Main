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
let {data}=require("./prodData.js")
let {shops,products,purchases}=data

const { Client } = require("pg");
const client = new Client({
    user: "postgres",
    password: "Abc@1233#$%",
    database: "postgres",
    port: 5432,
    host: "db.voeaouyjnwvlabhgnxyr.supabase.co",
    ssl: { rejectUnauthorized: false },
});
client.connect(function (res, error) {
    console.log(`Connected!!!`);
});

app.get("/reset",function(req,res){
    
    let query="DELETE FROM shop";
    client.query(query,function(err,result){
        if(err)res.status(404).send("No Data Found")
        else {
            let values=shops.map(n=>[n.shopId,n.name,n.rent])
            console.log(values[0])
            let query1=`INSERT INTO shop (id,name,rent)VALUES ($1,$2,$3)`;
            client.query(query1,values[0],function(err,result){
                if(err)console.log(err)
                client.query(query1,values[1],function(err,result){
                    if(err)console.log(err)
                    client.query(query1,values[2],function(err,result){
                        if(err)console.log(err)
                        client.query(query1,values[3],function(err,result){
                            if(err)console.log(err)
                            else {
                                
                                let query="DELETE FROM product";
                                client.query(query,function(err,result){
                                    if(err)res.status(404).send("No Data Found")
                                    else {
                                        let values=products.map(n=>[n.productId,n.productName,n.category,n.description])
                                        console.log(values[0])
                                        let query1=`INSERT INTO product (productId,productName,category,description)VALUES ($1,$2,$3,$4)`;
                                        client.query(query1,values[0],function(err,result){
                                            if(err)console.log(err)
                                            client.query(query1,values[1],function(err,result){
                                                if(err)console.log(err)
                                                client.query(query1,values[2],function(err,result){
                                                    if(err)console.log(err)
                                                    client.query(query1,values[3],function(err,result){
                                                        if(err)console.log(err)
                                                        client.query(query1,values[4],function(err,result){
                                                            if(err)console.log(err)
                                                            client.query(query1,values[5],function(err,result){
                                                                if(err)console.log(err)
                                                                client.query(query1,values[6],function(err,result){
                                                                    if(err)console.log(err)
                                                                    client.query(query1,values[7],function(err,result){
                                                                        if(err)console.log(err)
                                                                        else{

                                                                            let query="DELETE FROM purchase";
                                                                            client.query(query,function(err,result){
                                                                                if(err)res.status(404).send("No Data Found")
                                                                                else {
                                                                                    let values=purchases.map(n=>[n.shopId,n.productid,n.quantity,n.price])
                                                                                    console.log(values[0])
                                                                                    let query1=`INSERT INTO purchase (shopId,productid,quantity,price)VALUES ($1,$2,$3,$4)`;
                                                                                    client.query(query1,values[0],function(err,result){
                                                                                        if(err)console.log(err)
                                                                                        client.query(query1,values[1],function(err,result){
                                                                                            if(err)console.log(err)
                                                                                            client.query(query1,values[2],function(err,result){
                                                                                                if(err)console.log(err)
                                                                                                client.query(query1,values[3],function(err,result){
                                                                                                    if(err)console.log(err)
                                                                                                    client.query(query1,values[4],function(err,result){
                                                                                                        if(err)console.log(err)
                                                                                                        client.query(query1,values[5],function(err,result){
                                                                                                            if(err)console.log(err)
                                                                                                            client.query(query1,values[6],function(err,result){
                                                                                                                if(err)console.log(err)
                                                                                                                client.query(query1,values[7],function(err,result){
                                                                                                                    if(err)console.log(err)
                                                                                                                    else res.send(result.rows)
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })

                                                                                }
        
                                                                            })

                                                                        }
                                                                
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })

                                    }
        
                                })

                            }

                        })
                    })
                })
            })
        }
        
    })
})
app.get("/shops",function(req,res){
    
    let query="SELECT * FROM shop";
    client.query(query,function(err,result){
        if(err)console.log(err)
        else res.send(result.rows)
    })
})
app.post("/shops",function(req,res){
    var values=Object.values(req.body);
    console.log(values)
    let query="INSERT INTO shop (name,rent)VALUES ($1,$2)";
    client.query(query,values,function(err,result){
        if(err)res.status(404).send(err)
        else{
            let query1="SELECT * FROM shop";
            client.query(query1,function(err,result){
                if(err)res.status(404).send(err)
                else res.send(result.rows)
            })
        }
    })
})
app.get("/products",function(req,res){
    
    let query="SELECT * FROM product";
    client.query(query,function(err,result){
        if(err)console.log(err)
        else res.send(result.rows)
    })
})
app.post("/products",function(req,res,next){
    var values=Object.values(req.body);
    
    let query=`INSERT INTO product (productname,category,description)VALUES ($1,$2,$3)`;
    client.query(query,values,function(err,result){
        if(err)res.status(404).send(err)
        else{
            let query1="SELECT * FROM product";
            client.query(query1,function(err,result){
                if(err)res.status(404).send(err)
                else res.send(result.rows)
            })
        }
    })
})
app.get("/products/:id",function(req,res){
    let id=+req.params.id
    value=[id]
    let query="SELECT * FROM product where productid=$1";
    client.query(query,value,function(err,result){
        if(err)res.status(404).send(err)
        else res.send(result.rows)
    })
})
app.put("/products/:id",function(req,res){
    let id=+req.params.id
    let category=req.body.category
    let description=req.body.description
    let values=[category,description,id]
    let query="UPDATE product SET category=$1, description=$2 where productid=$3";
    client.query(query,values,function(err,result){
        if(err)res.status(404).send("No Data Found")
        else res.send(result.rows)
    })
})
app.get("/purchases",function(req,res){
    let productname=req.query.productname
    let shopname=req.query.shopname
    let sort=req.query.sort
    

    if(productname){
        let p=productname.split(',')
        console.log(p)
        console.log(p.length)
        if(p.length==1)
        {
            let values=[productname.split(',')]
            console.log(values)
            let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1))";
            client.query(query,productname.split(','),function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==2)
        {
            let values=[productname.split(',')]
            console.log(values)
            let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2))";
            client.query(query,productname.split(','),function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==3)
        {
            let values=[productname.split(',')]
            console.log(values)
            let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3))";
            client.query(query,productname.split(','),function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==4)
        {
            let values=[productname.split(',')]
            console.log(values)
            let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4))";
            client.query(query,productname.split(','),function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==5)
        {
            let values=[productname.split(',')]
            console.log(values)
            let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5))";
            client.query(query,productname.split(','),function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==6)
        {
            let values=[productname.split(',')]
            console.log(values)
            let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6))";
            client.query(query,productname.split(','),function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==7)
        {
            let values=[productname.split(',')]
            console.log(values)
            let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7))";
            client.query(query,productname.split(','),function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==8)
        {
            let values=[productname.split(',')]
            console.log(values)
            let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8))";
            client.query(query,productname.split(','),function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
    }
    else if(shopname)
    {
        
        let values=[shopname]
        
        let query="SELECT * FROM purchase where shopId=(SELECT id FROM shop where name=$1)";
        client.query(query,values,function(err,result){
            if(err)res.status(404).send(err)
            else res.send(result.rows)
        }) 
    }
    else if (sort)
    {
        if(sort=='QtyAsc')
        {
            
            let sql1="SELECT * FROM purchase ORDER By quantity ASC";
            client.query(sql1,function(err,result){
                if(err)res.status(404).send(err)
                else res.send(result.rows)
            })
        }
        if(sort=='QtyDesc')
        {
            
            let sql1="SELECT * FROM purchase ORDER By quantity DESC";
            client.query(sql1,function(err,result){
                if(err)res.status(404).send(err)
                else res.send(result.rows)
            })
        }
        if(sort=='ValueAsc')
        {
            
            let sql1="SELECT * FROM purchase ORDER By quantity*price ASC";
            client.query(sql1,function(err,result){
                if(err)res.status(404).send(err)
                else res.send(result.rows)
            })
        }
        if(sort=='ValueDesc')
        {
            
            let sql1="SELECT * FROM purchase ORDER By quantity*price DESC";
            client.query(sql1,function(err,result){
                if(err)res.status(404).send(err)
                else res.send(result.rows)
            })
        }
    }
    else {
        
        let query="SELECT * FROM purchase";
        client.query(query,function(err,result){
            
            if(err)console.log(err)
            else res.send(result.rows)
        })
    }
    
})
app.get("/purchases/shops/:id",function(req,res){
    let id=+req.params.id
    let value=[id]
    
    let query="SELECT * FROM purchase where shopid=$1";
    client.query(query,value,function(err,result){
        if(err)res.status(404).send(err)
        else res.send(result.rows)
    })
})
app.get("/purchases/products/:id",function(req,res){
    let id=+req.params.id
    let value=[id]
    
    let query="SELECT * FROM purchase where productid=$1";
    client.query(query,value,function(err,result){
        if(err)res.status(404).send(err)
        else res.send(result.rows)
    })
})
app.get("/totalPurchase/shop/:id",function(req,res){
    let id=+req.params.id
    let value=[id]
    
    let query="SELECT productid,SUM(quantity) as totalpurchase FROM purchase GROUP BY shopId=$1,productid;";
    client.query(query,value,function(err,result){
        if(err)console.log(err)
        else res.send(result.rows)
    })
})
app.get("/totalPurchase/product/:id",function(req,res){
    let id=+req.params.id
    let value=[id]
    
    let sql="SELECT shopId,SUM(quantity) as totalpurchase FROM purchase GROUP BY productid=$1,shopId";
    client.query(sql,value,function(err,result){
        if(err)res.status(404).send(err)
        else res.send(result.rows)
    })
})
app.post("/purchases",function(req,res){
    var values=Object.values(req.body)
    
    let query="INSERT INTO purchase (shopid,productid,quantity,price)VALUES ($1,$2,$3,$4)";
    client.query(query,values,function(err,result){
        if(err)res.status(404).send(err)
        else{
            let query1="SELECT * FROM purchase";
            client.query(query1,function(err,result){
                if(err)res.status(404).send(err)
                else res.send(result.rows)
            })
        }
    })
})