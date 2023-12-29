let container = document.getElementById("container");
let data=[]
let btn=document.getElementById("button")


function clickHere(){
    fetch("https://reqres.in/api/users")
    .then((res)=>res.json())
    .then((res)=>{
        data = res.data;
        localStorage.setItem("user",JSON.stringify(data))
        console.log(data);
        fetchUser()
    })
    .catch((error)=>{
        console.log(error)
    })
}




function fetchUser(){
    let display=localStorage.getItem("user")
    if(display){
        let parse=JSON.parse(display)
    
        parse.forEach((user) => {
            let div=document.createElement("div")

            let avtar=document.createElement("img")
            avtar.src=user.avatar

            let email=document.createElement("p")
            email.innerText=`email id : ${user.email}`
            let name=document.createElement('p')
            name.innerText=`name : ${user.first_name}`


            let id=document.createElement("p")
            id.innerText=`user Id : ${user.id}`

            let last_n=document.createElement("p")
            last_n.innerText=`Last_name : ${user.last_name}`

            div.append(avtar,email,name,id,last_n)

            container.appendChild(div)
        
        });
    
    }
}


btn.addEventListener("click",function(){
    clickHere()

})

