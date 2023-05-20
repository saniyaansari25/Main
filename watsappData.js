let contacts=[
    {id:1,name:"Ramesh",img:"https://w0.peakpx.com/wallpaper/208/752/HD-wallpaper-whatsapp-dp-cartoon.jpg",msgfrom:"",msgTo:"Happy bday in advance 🎂🎂🎂🎉🎊",time:"7:05 PM"},
    {id:2,name:"Rahul",img:"https://cdn4.sharechat.com/img_253816_1b149d12_1672674842650_sc.jpg",msgfrom:"",msgTo:"Thankyou yrr❤️🥰",time:"8:05 PM"},
    {id:3,name:"Zain",img:"https://wallpapers.com/images/featured/qzytdg8xliuaelun.jpg",msgfrom:"",msgTo:"Ha",time:"9:05 PM"},
    {id:4,name:"Raju",img:"https://wallpapercave.com/dwp1x/wp3054697.jpg",msgfrom:"",msgTo:"ok thanks bro",time:"6:05 PM"},
    {id:5,name:"Thomas",img:"https://wallpapers.com/images/high/smiling-close-up-oggy-and-the-cockroaches-71njhqoakbau7nbm.webp",msgfrom:"",msgTo:"ok..kitne bje tk aoge tm?",time:"6:05 PM"},
    {id:6,name:"Ron",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgvWnBOLd2qxPgNiSv6btPwW_6evc6KghuA&usqp=CAU",msgfrom:"",msgTo:"ok😓 as your wish",time:"9:08 PM"},
    {id:7,name:"Harry",img:"https://www.pixelstalk.net/wp-content/uploads/2016/07/Harry-Potter-iPhone-Backgrounds.jpg",msgfrom:"",msgTo:"ok😓 as your wish",time:"9:08 PM"},
    
]
let msg=[
    {
        id:1,
        msg:[
            {msgFrom:"Hello...Ankit here",msgTo:"Hello Ramesh 😊!",timeFrom:"7:00 PM",timeTo:"7:01 PM",status:"seen"},
            {msgFrom:"How are you Ramesh?",msgTo:"I'm fine....what about you?",timeFrom:"7:02 PM",timeTo:"7:03 PM",status:"reached"},
            {msgFrom:"I'm also fine...Actually tomorrow is my bday and you are invited.",msgTo:"Happy bday in advance 🎂🎂🎂🎉🎊",timeFrom:"7:04 PM",timeTo:"7:05 PM",status:"not reached"},
        ],
        
    },
    {
        id:2,
        msg:[
            {msgFrom:"Hello Ankit ..kl tm clg jaoge..?",msgTo:"Ha mai jauga..tm?",timeFrom:"8:00 PM",timeTo:"8:01 PM",status:"seen"},
            {msgFrom:"Ni..mai ni aa raha...tm mera assignment submit kr doge kya..?",msgTo:"I'm fine....what about you?",timeFrom:"8:02 PM",timeTo:"8:03 PM",status:"seen"},
            {msgFrom:"😒😒😒😒thk h..likh duga",msgTo:"ok kr duga...but tmhe mera assignment bhi likhna parega",timeFrom:"8:04 PM",timeTo:"8:05 PM",status:"reached"},
            {msgFrom:"ok",msgTo:"Thankyou yrr❤️🥰",timeFrom:"8:00 PM",timeTo:"8:05 PM",status:"not reached"},
        ],
    },
    {
        id:3,
        msg:[
            {msgFrom:"hey Ankit...",msgTo:"Ha kya hua?",timeFrom:"9:00 PM",timeTo:"9:01 PM",status:"seen"},
            {msgFrom:"kl hm log party karege",msgTo:"kon log",timeFrom:"9:02 PM",timeTo:"9:03 PM",status:"seen"},
            {msgFrom:"mai...aur sare friends",msgTo:"acha",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"reached"},
            {msgFrom:"kl party m aoge?",msgTo:"Ha",timeFrom:"9:00 PM",timeTo:"9:05 PM",status:"not reached"},
        ],
    },
    {
        id:4,
        msg:[
            {msgFrom:"",msgTo:"Hello...raju tmne kl test diya tha?",timeFrom:"9:00 PM",timeTo:"9:01 PM",status:"seen"},
            {msgFrom:"ha...",msgTo:"kya aaya tha test m?",timeFrom:"9:02 PM",timeTo:"9:03 PM",status:"seen"},
            {msgFrom:"pichle test ka saara aya tha",msgTo:"acha",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"reached"},
            {msgFrom:"ha",msgTo:"ok thanks bro",timeFrom:"9:00 PM",timeTo:"9:05 PM",status:"not reached"},
        ],
    },
    {
        id:5,
        msg:[
            {msgFrom:"Hello Ankit...",msgTo:"Kl mere bhai ki shadi hai...",timeFrom:"9:00 PM",timeTo:"9:01 PM",status:"seen"},
            {msgFrom:"",msgTo:"and you are invited",timeFrom:"9:02 PM",timeTo:"9:01 PM",status:"seen"},
            {msgFrom:"",msgTo:"aana zaroor...mai wait karuga tmhara",timeFrom:"9:01 PM",timeTo:"9:02 PM",status:"reached"},
            {msgFrom:"ha mai auga apne bhai k sath",msgTo:"ok..kitne bje tk aoge tm?",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"not reached"},
            
        ],
    },
    {
        id:6,
        msg:[
            {msgFrom:"ha mai auga apne bhai k sath",msgTo:"ok..kitne bje tk aoge tm?",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"seen"},
            {msgFrom:"9:00pm tk",msgTo:"itni der m 😨..thoda jldi ao",timeFrom:"9:06 PM",timeTo:"9:07 PM",status:"seen"},
            {msgFrom:"Acha mai koshish karuga lekin mushkil h 9 se pehle aana",msgTo:"ok😓 as your wish",timeFrom:"9:08 PM",timeTo:"9:09 PM",status:"reached"},
            
        ],
        
    },
    {
        id:7,
        msg:[
            {msgFrom:"ha mai auga apne bhai k sath",msgTo:"ok..kitne bje tk aoge tm?",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"seen"},
            {msgFrom:"9:00pm tk",msgTo:"itni der m 😨..thoda jldi ao",timeFrom:"9:06 PM",timeTo:"9:07 PM",status:"seen"},
            {msgFrom:"Acha mai koshish karuga lekin mushkil h 9 se pehle aana",msgTo:"ok😓 as your wish",timeFrom:"9:08 PM",timeTo:"9:09 PM",status:"reached"},
            
        ],
        
    }
]
module.exports.contacts=contacts;
module.exports.msg=msg;