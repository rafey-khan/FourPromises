const root = document.getElementById('root');
function printmessage(msg,status){
    let element = document.createElement('h3');
    if(status) element.style.color = "red";
    else element.style.color = "green";
    element.innerHTML = msg;
    root.append(element);
}


//    ###########    Four Promises   #########



// using promises we resolve callback hell
new Promise(function(res,rej){
    // in this we fetch the json data
    let data = fetch('./json/json1.json')
    .then((res)=>{
        if(!res.ok){
            // stands for if fetch is getting fail to load file.
            return Promise.reject(`Error status with code ${res.status}`)
        }
        return res.json()
    })
    .then((result)=>{
        console.log(result);
        printmessage(result,0);
        res(result);  // it indicates that the fetch is successfully executed.
    })
    .catch((err)=>{
        console.log(err);
        printmessage(err,1);
        rej("Error occur to load json1 file.");
    });
})
.then((res)=>{
    // in this we have to check the json data
    console.log("Yes the json1 file is fetched.");
    printmessage("Yes the json1 file is fetched.");
    if(res.length == 3){
        return res;
    }
})
.then((res)=>{
    // this .then method stands for the previous condition resolve as true
    console.log("yes the json data length is 3");
    printmessage("Yes the json data length is 3");
    // In this we have to check the id 1 is present in data or not 
    let user = res.find((item)=> item._id == 1)
    if(user){
        return user;
    }
})
.then((res)=>{
    // this .then stands when the previous condition is true;
    console.log("yes the user with id =1 is found");
    printmessage(`Yes the user with id =1 is found and The user id is ${res._id} and the name is ${res.name}`);
    // in this we have to print data
    console.log(`The user id is ${res._id} and the name is ${res.name}`);
})
.catch((rej)=>{
    console.log(rej);
    printmessage(rej,1);  
})

