const keyName="user"
function login(obj){
    let str=JSON.stringify(obj)
    console.log("STR",str)
    localStorage.setItem(keyName, str)
}
function logout(){
    console.log("LOGOUT")
    localStorage.removeItem(keyName)
}
function getUser(){
    let str=localStorage.getItem(keyName)
    let obj=str ? JSON.parse(str) : null
    return obj
}
export default{
    login,
    logout,
    getUser,
}
/*const keyName="user"
function login(obj){
    let str=JSON.stringify(obj)
    console.log("STR",str)
    localStorage.setItem(keyName, str)
}
function logout(){
    localStorage.removeItem(keyName)
}
function getUser(){
    let str=localStorage.getItem(keyName)
    let obj=str ? JSON.parse(str) : null
    return obj
}
export default{
    login,
    logout,
    getUser,
}
*/
/*const keyName="user"
function login(obj){
    let str=JSON.stringify(obj)
    localStorage.setItem(keyName, str)
}
function logout(){
    localStorage.removeItem(keyName)
}
function getUser(){
    let str=localStorage.getItem(keyName)
    let obj=str ? JSON.parse(str) : null
    return obj
}
export default{
    login,
    logout,
    getUser,
}*/