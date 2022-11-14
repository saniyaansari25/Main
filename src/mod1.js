let name="Jack";
let age=28;
let techs=["JS","Node","React"];

function knowsTech(tech){
    console.log("In fn",tech)
   return techs.find(t1=>t1===tech) ? true : false
}

module.exports={name,age,techs,knowsTech};
