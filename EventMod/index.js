const EventEmitter = require("events");
 
const event = new EventEmitter();

event.on('sayMyName', () =>{
    console.log("your name");
});

event.on('sayMyName', () =>{
    console.log("your name1");
});

event.on('sayMyName', () =>{
    console.log("your name2");
});

event.emit("sayMyName");

event.on('checkPage',(sc,msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});
// event.emit("checkPage",200,"ok") adding parameters to event