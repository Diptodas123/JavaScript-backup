const time=document.getElementById("time");
setInterval(()=>{
    let t=new Date();
    time.innerHTML=t.toString().slice(15,24);
},1000);