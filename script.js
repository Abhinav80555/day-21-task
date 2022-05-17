let num = 10;

let count= document.createElement("div");
count.innerHTML= num;

document.body.append(count);

setTimeout(()=>{
    num--;
    count.innerHTML=num;
    setTimeout(()=>{
        num--;
        count.innerHTML=num;
        setTimeout(()=>{
            num--;
            count.innerHTML=num;
            setTimeout(()=>{
                num--;
                count.innerHTML=num;
                setTimeout(()=>{
                    num--;
                    count.innerHTML=num;
                    setTimeout(()=>{
                        num--;
                        count.innerHTML=num;
                        setTimeout(()=>{
                            num--;
                            count.innerHTML=num;
                            setTimeout(()=>{
                                num--;
                                count.innerHTML=num;
                                setTimeout(()=>{
                                    num--;
                                    count.innerHTML=num;
                                    setTimeout(()=>{
                                        num--;
                                        count.innerHTML=num;
                                        setTimeout(()=>{
                                            num--;
                                            count.innerHTML="Happy Independence Day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)



