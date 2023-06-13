let contacts=[
    {id:1,phone:1111111111,name:"Ramesh",img:"https://w0.peakpx.com/wallpaper/208/752/HD-wallpaper-whatsapp-dp-cartoon.jpg",lastMsg:"Hi ... how are you ??",time:"7:30 AM"},
    {id:2,phone:2222222222,name:"Rahul",img:"https://cdn4.sharechat.com/img_253816_1b149d12_1672674842650_sc.jpg",lastMsg:"I am good😁",time:"7:30 AM"},
    {id:3,phone:3333333333,name:"Zain",img:"https://cn.i.cdn.ti-platform.com/cnapac/content/2017/showpage/ben-10/sa/showicon.png",lastMsg:"ha😍...",time:"7:30 AM"},
    {id:4,phone:4444444444,name:"Raju",img:"https://play-lh.googleusercontent.com/nxIFMW1QR5YLap0S7FEnhQjPFLBDo7k662OrzS7nwMGLOzXXdz4EBC41FIQjjnAu2sds",lastMsg:"Usme hi tmhari help chahiye thi",time:"7:30 AM"},
    {id:5,phone:5555555555,name:"Thomas",img:"https://upload.wikimedia.org/wikipedia/commons/5/5e/JJ_Thomson.jpg",lastMsg:"Tmhe khud apna homework krna chahiye ab🤨",time:"7:30 AM"},
    {id:6,phone:6666666666,name:"Ron",img:"https://www.kidscollections.com.au/wp-content/uploads/2018/11/Harry-Potter-Emblem-Rug.jpg",lastMsg:" Ok ",time:"7:30 AM"},
    {id:7,phone:7777777777,name:"Harry",img:"https://render.fineartamerica.com/images/rendered/search/metal-print/images/artworkimages/medium/3/harry-potter-and-the-philosophers-stone-by-jk-rowling-greatest-books-ever-art-print-series-200-design-turnpike.jpg?shape=square",lastMsg:"Ok..get well soon💐",time:"7:30 AM"},
    
]
let msg=[
    {text:'Hi🙋🏻‍♂️...how are you ??',senderPhone:1111111111,receiverPhone:1111111111,time:'7:30 AM'},

    {text:'Hi🙋🏻‍♂️...how are you?',senderPhone:2222222222,receiverPhone:1111111111,time:'7:30 AM'},
    {text:'Hello🙋🏻‍♂️....i am fine',senderPhone:1111111111,receiverPhone:2222222222,time:'7:30 AM'},
    {text:'What about you..?',senderPhone:1111111111,receiverPhone:2222222222,time:'7:30 AM'},
    {text:'I am good😁',senderPhone:2222222222,receiverPhone:1111111111,time:'7:30 AM'},

    {text:'Hi🙋🏻‍♂️... we are going to summer trip🛫🏕️🏄🏻‍♂️',senderPhone:3333333333,receiverPhone:1111111111,time:'7:40 AM'},
    {text:'tm bhi chaloge hmare sath?',senderPhone:3333333333,receiverPhone:1111111111,time:'7:40 AM'},
    {text:'ha😍...',senderPhone:1111111111,receiverPhone:3333333333,time:'7:40 AM'},

    {text:'what are you doing?  can u help me plss😁?',senderPhone:4444444444,receiverPhone:1111111111,time:'7:40 AM'},
    {text:'yes...what happen🙄?',senderPhone:1111111111,receiverPhone:4444444444,time:'7:40 AM'},
    {text:'actually mujhe kl assignment submit krna h',senderPhone:4444444444,receiverPhone:1111111111,time:'7:40 AM'},
    {text:'Usme hi tmhari help chahiye thi',senderPhone:4444444444,receiverPhone:1111111111,time:'7:40 AM'},

    {text:'Hii🙋🏻‍♂️.. please mera homework m help krdo😁',senderPhone:5555555555,receiverPhone:1111111111,time:'7:40 AM'},
    {text:'Nhi🤨...',senderPhone:1111111111,receiverPhone:5555555555,time:'7:40 AM'},
    {text:'Tmhe khud apna homework krna chahiye ab🤨',senderPhone:1111111111,receiverPhone:5555555555,time:'7:40 AM'},

    {text:' kl test h tayyar krke aana chapter 2',senderPhone:6666666666,receiverPhone:1111111111,time:'7:40 AM'},
    {text:' Ok ',senderPhone:1111111111,receiverPhone:6666666666,time:'7:40 AM'},

    {text:'Aaj tm clg q ni aye ',senderPhone:7777777777,receiverPhone:1111111111,time:'7:40 AM'},
    {text:'bcz i m suffering from fever🤒😷',senderPhone:1111111111,receiverPhone:7777777777,time:'7:40 AM'},
    {text:'Aur mujhe blood test krana tha',senderPhone:1111111111,receiverPhone:7777777777,time:'7:40 AM'},
    {text:'Ok..get well soon💐',senderPhone:7777777777,receiverPhone:1111111111,time:'7:40 AM'}
]
/*
let msg=[
    {
        id:1,
        phone:1111111111,
        msg:[
            {msgFrom:"Hello...Ankit here",msgTo:"Hello Ramesh 😊!",timeFrom:"7:00 PM",timeTo:"7:01 PM",status:"seen",day:"yesterday"},
            {msgFrom:"How are you Ramesh?",msgTo:"I'm fine....what about you?",timeFrom:"7:02 PM",timeTo:"7:03 PM",status:"seen",day:"yesterday"},
            {msgFrom:"I'm also fine...Actually tomorrow is my bday and you are invited.",msgTo:"Happy bday🎂🥧🧁",timeFrom:"7:04 PM",timeTo:"7:05 PM",status:"seen",day:"yesterday"},
            {msgFrom:"Hello...ankit tm kitne bje tk oge aaj party m",msgTo:"Ha mai bs nikal hi raha hu ghr se",timeFrom:"5:00 PM",timeTo:"5:05 PM",status:"seen",day:"Today"},
            {msgFrom:"jldi ao",msgTo:"ok",timeFrom:"5:00 PM",timeTo:"5:05 PM",status:"seen",day:""},
            
        ],
        
    },
    {
        id:2,
        phone:2222222222,
        msg:[
            {msgFrom:"Hello Ankit ..kl tm clg jaoge..?",msgTo:"Ha mai jauga..tm?",timeFrom:"8:00 PM",timeTo:"8:01 PM",status:"seen",day:"yesterday"},
            {msgFrom:"Ni..mai ni aa raha...tm mera assignment submit kr doge kya..?",msgTo:"Ni",timeFrom:"8:02 PM",timeTo:"8:03 PM",status:"seen",day:"yesterday"},
            {msgFrom:"Please kr do",msgTo:"ok kr duga...but tmhe mera assignment bhi likhna parega",timeFrom:"1:00 AM",timeTo:"1:05 PM",status:"seen",day:"Today"},
            {msgFrom:"ok likh duga",msgTo:"Thankyou yrr❤️🥰",timeFrom:"1:06 PM",timeTo:"1:07 PM",status:"reached",day:""},
        ],
    },
    {
        id:3,
        phone:3333333333,
        msg:[
            {msgFrom:"hey Ankit...",msgTo:"Ha kya hua?",timeFrom:"9:00 PM",timeTo:"9:01 PM",status:"seen",day:"yesterday"},
            {msgFrom:"kl hm log party karege",msgTo:"kon log",timeFrom:"9:02 PM",timeTo:"9:03 PM",status:"seen",day:"yesterday"},
            {msgFrom:"mai...aur sare friends",msgTo:"acha",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"reached",day:"Today"},
            {msgFrom:"kl party m aoge?",msgTo:"Ha",timeFrom:"9:00 PM",timeTo:"9:05 PM",status:"not reached",day:""},
        ],
    },
    {
        id:4,
        phone:4444444444,
        msg:[
            {msgFrom:"",msgTo:"Hello...raju tmne kl test diya tha?",timeFrom:"9:00 PM",timeTo:"9:01 PM",status:"seen",day:"yesterday"},
            {msgFrom:"ha...",msgTo:"kya aaya tha test m?",timeFrom:"9:02 PM",timeTo:"9:03 PM",status:"seen",day:"yesterday"},
            {msgFrom:"pichle test ka saara aya tha",msgTo:"acha",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"reached",day:"Today"},
            {msgFrom:"ha",msgTo:"ok thanks bro",timeFrom:"9:00 PM",timeTo:"9:05 PM",status:"not reached",day:""},
        ],
    },
    {
        id:5,
        phone:5555555555,
        msg:[
            {msgFrom:"Hello Ankit...",msgTo:"Kl mere bhai ki shadi hai...",timeFrom:"9:00 PM",timeTo:"9:01 PM",status:"seen",day:"yesterday"},
            {msgFrom:"",msgTo:"and you are invited",timeFrom:"9:02 PM",timeTo:"9:01 PM",status:"seen",day:"yesterday"},
            {msgFrom:"",msgTo:"aana zaroor...mai wait karuga tmhara",timeFrom:"9:01 PM",timeTo:"9:02 PM",status:"reached",day:"Today"},
            {msgFrom:"ha mai auga apne bhai k sath",msgTo:"ok..",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"not reached",day:""},
            
        ],
    },
    {
        id:6,
        phone:6666666666,
        msg:[
            {msgFrom:"ha mai auga apne bhai k sath",msgTo:"ok..kitne bje tk aoge tm?",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"seen",day:"yesterday"},
            {msgFrom:"9:00pm tk",msgTo:"itni der m 😨..thoda jldi ao",timeFrom:"9:06 PM",timeTo:"9:07 PM",status:"seen",day:"yesterday"},
            {msgFrom:"Acha mai koshish karuga lekin mushkil h 9 se pehle aana",msgTo:"ok😓 as your wish",timeFrom:"9:08 PM",timeTo:"9:09 PM",status:"reached",day:"Today"},
            
        ],
        
    },
    {
        id:7,
        phone:7777777777,
        msg:[
            {msgFrom:"ha mai auga apne bhai k sath",msgTo:"ok..kitne bje tk aoge tm?",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"seen",day:"yesterday"},
            {msgFrom:"9:00pm tk",msgTo:"itni der m 😨..thoda jldi ao",timeFrom:"9:06 PM",timeTo:"9:07 PM",status:"seen",day:"Today"},
            {msgFrom:"Acha mai koshish karuga lekin mushkil h 9 se pehle aana",msgTo:"ok😓 as your wish",timeFrom:"9:08 PM",timeTo:"9:09 PM",status:"reached",day:""},
            
        ],
        
    },
    {
        id:8,
        phone:8888888888,
        msg:[
            {msgFrom:"Hello...",msgTo:"hello Malfoy...",timeFrom:"9:04 PM",timeTo:"9:05 PM",status:"seen",day:"yesterday"},
            {msgFrom:"how are you and where are you going yesterday..?",msgTo:"None of your business Malfoy",timeFrom:"9:06 PM",timeTo:"9:07 PM",status:"seen",day:"yesterday"},
            {msgFrom:"So...you dont tell me about that..",msgTo:"No",timeFrom:"9:08 PM",timeTo:"9:09 PM",status:"reached",day:"Today"},
            
        ],
        
    }
]*/
module.exports.contacts=contacts;
module.exports.msg=msg;