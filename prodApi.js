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
var port=process.env.PORT || 2410;
//const port=2410;
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
app.get("/resetPurchase",function(req,res){
    let query="DELETE FROM purchase";
    client.query(query,function(err,result){
        if(err)res.status(404).send("No Data Found")
        else{
            let values=purchases.map(n=>[n.purchaseId,n.shopId,n.productid,n.quantity,n.price])
            let query1=`INSERT INTO purchase (purchaseId,shopId,productid,quantity,price)VALUES ($1,$2,$3,$4,$5);`;
            client.query(query1,[values[0]],function(err,result){
                if(err)console.log(err)
                else res.send(result.rows)
            })
        }
    })
})
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
                                        let values=products.map(n=>[n.productId,n.productname,n.category,n.description])
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
                                                                        else {
                                                                            let query="DELETE FROM purchase";
                                                                            client.query(query,function(err,result){
                                                                                if(err)res.status(404).send("No Data Found")
                                                                                else{
                                                                                    let values=purchases.map(n=>[n.purchaseId,n.shopId,n.productid,n.quantity,n.price])
                                                                                    let query1=`INSERT INTO purchase (purchaseId,shopId,productid,quantity,price)VALUES ($1,$2,$3,$4,$5);`;
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
                                                                                                                    client.query(query1,values[8],function(err,result){
                                                                                                                        if(err)console.log(err)
                                                                                                                        client.query(query1,values[9],function(err,result){
                                                                                                                            if(err)console.log(err)
                                                                                                                            client.query(query1,values[10],function(err,result){
                                                                                                                                if(err)console.log(err)
                                                                                                                                client.query(query1,values[11],function(err,result){
                                                                                                                                    if(err)console.log(err)
                                                                                                                                    client.query(query1,values[12],function(err,result){
                                                                                                                                        if(err)console.log(err)
                                                                                                                                        client.query(query1,values[13],function(err,result){
                                                                                                                                            if(err)console.log(err)
                                                                                                                                            client.query(query1,values[14],function(err,result){
                                                                                                                                                if(err)console.log(err)
                                                                                                                                                client.query(query1,values[15],function(err,result){
                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                    client.query(query1,values[16],function(err,result){
                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                        client.query(query1,values[17],function(err,result){
                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                            client.query(query1,values[18],function(err,result){
                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                client.query(query1,values[19],function(err,result){
                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                    client.query(query1,values[20],function(err,result){
                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                        client.query(query1,values[21],function(err,result){
                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                            client.query(query1,values[22],function(err,result){
                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                client.query(query1,values[23],function(err,result){
                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                    client.query(query1,values[24],function(err,result){
                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                        client.query(query1,values[25],function(err,result){
                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                            client.query(query1,values[26],function(err,result){
                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                client.query(query1,values[27],function(err,result){
                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                    client.query(query1,values[28],function(err,result){
                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                        client.query(query1,values[29],function(err,result){
                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                            client.query(query1,values[30],function(err,result){
                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                client.query(query1,values[31],function(err,result){
                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                    client.query(query1,values[32],function(err,result){
                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                        client.query(query1,values[33],function(err,result){
                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                            client.query(query1,values[34],function(err,result){
                                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                                client.query(query1,values[35],function(err,result){
                                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                                    client.query(query1,values[36],function(err,result){
                                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                                        client.query(query1,values[37],function(err,result){
                                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                                            client.query(query1,values[38],function(err,result){
                                                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                                                client.query(query1,values[39],function(err,result){
                                                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                                                    client.query(query1,values[40],function(err,result){
                                                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                                                        client.query(query1,values[41],function(err,result){
                                                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                                                            client.query(query1,values[42],function(err,result){
                                                                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                                                                client.query(query1,values[43],function(err,result){
                                                                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                                                                    client.query(query1,values[44],function(err,result){
                                                                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                                                                        client.query(query1,values[45],function(err,result){
                                                                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                                                                            client.query(query1,values[46],function(err,result){
                                                                                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                                                                                client.query(query1,values[47],function(err,result){
                                                                                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                                                                                    client.query(query1,values[48],function(err,result){
                                                                                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                                                                                        client.query(query1,values[49],function(err,result){
                                                                                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                                                                                            client.query(query1,values[50],function(err,result){
                                                                                                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                                                                                                client.query(query1,values[51],function(err,result){
                                                                                                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                                                                                                    client.query(query1,values[52],function(err,result){
                                                                                                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                                                                                                        client.query(query1,values[53],function(err,result){
                                                                                                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                                                                                                            client.query(query1,values[54],function(err,result){
                                                                                                                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                client.query(query1,values[55],function(err,result){
                                                                                                                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                    client.query(query1,values[56],function(err,result){
                                                                                                                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                        client.query(query1,values[57],function(err,result){
                                                                                                                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                            client.query(query1,values[58],function(err,result){
                                                                                                                                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                client.query(query1,values[59],function(err,result){
                                                                                                                                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                    client.query(query1,values[60],function(err,result){
                                                                                                                                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                        client.query(query1,values[61],function(err,result){
                                                                                                                                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                            client.query(query1,values[62],function(err,result){
                                                                                                                                                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                                client.query(query1,values[63],function(err,result){
                                                                                                                                                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                                    client.query(query1,values[64],function(err,result){
                                                                                                                                                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                                        client.query(query1,values[65],function(err,result){
                                                                                                                                                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                                            client.query(query1,values[66],function(err,result){
                                                                                                                                                                                                                                                                                                                                                                if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                                                client.query(query1,values[67],function(err,result){
                                                                                                                                                                                                                                                                                                                                                                    if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                                                    client.query(query1,values[68],function(err,result){
                                                                                                                                                                                                                                                                                                                                                                        if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                                                        client.query(query1,values[69],function(err,result){
                                                                                                                                                                                                                                                                                                                                                                            if(err)console.log(err)
                                                                                                                                                                                                                                                                                                                                                                            client.query(query1,values[70],function(err,result){
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
                                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                })
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                        })
                                                                                                                                                                                                                    })
                                                                                                                                                                                                                })
                                                                                                                                                                                                            })
                                                                                                                                                                                                        })
                                                                                                                                                                                                    })
                                                                                                                                                                                                })
                                                                                                                                                                                            })
                                                                                                                                                                                        })
                                                                                                                                                                                    })
                                                                                                                                                                                })
                                                                                                                                                                            })
                                                                                                                                                                        })
                                                                                                                                                                    })
                                                                                                                                                                })
                                                                                                                                                            })
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
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
app.get("/shops/products",function(req,res){
    
    let query="SELECT * FROM product";
    client.query(query,function(err,result){
        if(err)console.log(err)
        let a={productArray:result.rows}
        let query1="SELECT * FROM shop";
        
        client.query(query1,function(err,result){
            
            if(err)console.log(err)
            
            else {
                let b={...a,shopArray:result.rows}
                res.send(b)
            }
            
        })
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
    let query="SELECT max(id) FROM shop;";
    client.query(query,function(err,result){
        if(err)res.status(404).send(err)
        else {
            let maxId=result.rows
            let mId=maxId[0].max+1
            values.push(mId)
           console.log(values)
            let query="INSERT INTO shop (name,rent,id)VALUES ($1,$2,$3)";
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
    if(productname && shopname && !sort){
        let p=productname.split(',')
        console.log(p)
        console.log(p.length)
        if(p.length==1)
        {
            console.log(shopname)
            let values=productname.split(',')
            values.push(shopname)
            console.log(values)
            let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$2) AND productid IN (SELECT productId FROM product where productName IN ($1)))";
            client.query(query,values,function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==2)
        {
            console.log(shopname)
            let values=productname.split(',')
            values.push(shopname)
            console.log(values)
            let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$3) AND productid IN (SELECT productId FROM product where productName IN ($1,$2)))";
            client.query(query,values,function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==3)
        {
            let values=productname.split(',')
            values.push(shopname)
            console.log(values)
            let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$4) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3)))";
            client.query(query,values,function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==4)
        {
            let values=productname.split(',')
            values.push(shopname)
            let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$5) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4)))";
            client.query(query,values,function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==5)
        {
            let values=productname.split(',')
            values.push(shopname)
            let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$6) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5)))";
            client.query(query,values,function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==6)
        {
            let values=productname.split(',')
            values.push(shopname)
            let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$7) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6)))";
            client.query(query,values,function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==7)
        {
            let values=productname.split(',')
            values.push(shopname)
            let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$8) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7)))";
            client.query(query,values,function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
        if(p.length==8)
        {
            let values=productname.split(',')
            values.push(shopname)
            let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$9) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8)))";
            client.query(query,values,function(err,result){
                if(err)res.status(404).send("No Data Found")
                else res.send(result.rows)
            }) 
        }
    }
    else if(productname && sort && shopname){
        if(sort=='QtyAsc')
        {
            let p=productname.split(',')
            console.log(p)
            console.log(p.length)
            if(p.length==1)
            {
                console.log(shopname)
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$2) AND productid IN (SELECT productId FROM product where productName IN ($1))) ORDER BY quantity ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==2)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$3) AND productid IN (SELECT productId FROM product where productName IN ($1,$2))) ORDER BY quantity ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==3)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$4) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3))) ORDER BY quantity ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==4)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$5) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4))) ORDER BY quantity ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==5)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$6) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5))) ORDER BY quantity ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==6)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$7) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6))) ORDER BY quantity ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==7)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$8) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7))) ORDER BY quantity ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==8)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$9) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8))) ORDER BY quantity ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
       } 
       if(sort=='QtyDesc')
        {
            let p=productname.split(',')
            console.log(p)
            console.log(p.length)
            if(p.length==1)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$2) AND productid IN (SELECT productId FROM product where productName IN ($1))) ORDER BY quantity DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==2)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$3) AND productid IN (SELECT productId FROM product where productName IN ($1,$2))) ORDER BY quantity DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==3)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$4) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3))) ORDER BY quantity DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==4)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$5) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4))) ORDER BY quantity DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==5)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$6) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5))) ORDER BY quantity DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==6)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$7) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6))) ORDER BY quantity DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==7)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$8) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7))) ORDER BY quantity DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==8)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$9) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8))) ORDER BY quantity DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
       } 
       if(sort=='ValueDesc')
        {
            let p=productname.split(',')
            console.log(p)
            console.log(p.length)
            if(p.length==1)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$2) AND productid IN (SELECT productId FROM product where productName IN ($1))) ORDER BY quantity*price DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==2)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$3) AND productid IN (SELECT productId FROM product where productName IN ($1,$2))) ORDER BY quantity*price DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==3)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$4) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3))) ORDER BY quantity*price DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==4)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$5) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4))) ORDER BY quantity*price DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==5)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$6) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5))) ORDER BY quantity*price DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==6)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$7) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6))) ORDER BY quantity*price DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==7)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$8) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7))) ORDER BY quantity*price DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==8)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$9) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8))) ORDER BY quantity*price DESC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
       } 
       if(sort=='ValueAsc')
        {
            let p=productname.split(',')
            console.log(p)
            console.log(p.length)
            if(p.length==1)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$2) AND productid IN (SELECT productId FROM product where productName IN ($1))) ORDER BY quantity*price ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==2)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$3) AND productid IN (SELECT productId FROM product where productName IN ($1,$2))) ORDER BY quantity*price ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==3)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$4) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3))) ORDER BY quantity*price ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==4)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$5) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4))) ORDER BY quantity*price ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==5)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$6) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5))) ORDER BY quantity*price ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==6)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$7) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6))) ORDER BY quantity*price ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==7)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$8) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7))) ORDER BY quantity*price ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==8)
            {
                let values=productname.split(',')
                values.push(shopname)
                console.log(values)
                let query="SELECT * FROM purchase where (shopId=(SELECT id FROM shop where name=$9) AND productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8))) ORDER BY quantity*price ASC";
                client.query(query,values,function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
       } 
    }
    else if(productname && sort && !shopname){
       if(sort=='QtyAsc')
        {
            let p=productname.split(',')
            console.log(p)
            console.log(p.length)
            if(p.length==1)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1)) ORDER BY quantity ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==2)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2)) ORDER BY quantity ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==3)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3)) ORDER BY quantity ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==4)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4)) ORDER BY quantity ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==5)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5)) ORDER BY quantity ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==6)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6)) ORDER BY quantity ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==7)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7)) ORDER BY quantity ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==8)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8)) ORDER BY quantity ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
       } 
       if(sort=='QtyDesc')
        {
            let p=productname.split(',')
            console.log(p)
            console.log(p.length)
            if(p.length==1)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1)) ORDER BY quantity DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==2)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2)) ORDER BY quantity DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==3)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3)) ORDER BY quantity DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==4)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4)) ORDER BY quantity DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==5)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5)) ORDER BY quantity DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==6)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6)) ORDER BY quantity DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==7)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7)) ORDER BY quantity DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==8)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8)) ORDER BY quantity DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
       } 
       if(sort=='ValueDesc')
        {
            let p=productname.split(',')
            console.log(p)
            console.log(p.length)
            if(p.length==1)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1)) ORDER BY quantity*price DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==2)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2)) ORDER BY quantity*price DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==3)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3)) ORDER BY quantity*price DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==4)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4)) ORDER BY quantity*price DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==5)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5)) ORDER BY quantity*price DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==6)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6)) ORDER BY quantity*price DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==7)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7)) ORDER BY quantity*price DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==8)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8)) ORDER BY quantity*price DESC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
       } 
       if(sort=='ValueAsc')
        {
            let p=productname.split(',')
            console.log(p)
            console.log(p.length)
            if(p.length==1)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1)) ORDER BY quantity*price ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==2)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2)) ORDER BY quantity*price ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==3)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3)) ORDER BY quantity*price ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==4)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4)) ORDER BY quantity*price ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==5)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5)) ORDER BY quantity*price ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==6)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6)) ORDER BY quantity*price ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==7)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7)) ORDER BY quantity*price ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
            if(p.length==8)
            {
                let values=[productname.split(',')]
                console.log(values)
                let query="SELECT * FROM purchase where productid IN (SELECT productId FROM product where productName IN ($1,$2,$3,$4,$5,$6,$7,$8)) ORDER BY quantity*price ASC";
                client.query(query,productname.split(','),function(err,result){
                    if(err)res.status(404).send("No Data Found")
                    else res.send(result.rows)
                }) 
            }
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
    else if(productname){
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
    
    let query="SELECT productid,SUM(quantity) as totalpurchase FROM purchase where shopId=$1 GROUP BY productid ;";
    client.query(query,value,function(err,result){
        if(err)console.log(err)
        else res.send(result.rows)
    })
})
app.get("/totalPurchase/product/:id",function(req,res){
    let id=+req.params.id
    let value=[id]
    
    let sql="SELECT shopId,SUM(quantity) as totalpurchase FROM purchase where productid=$1 GROUP BY shopId";
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