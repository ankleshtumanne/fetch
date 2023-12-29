let contaner=document.getElementById('container')

let input1=document.getElementById('inp1')
let input2=document.getElementById('inp2')

let btn=document.getElementById('submit')
let show = document.getElementById("display");

// let btn2=document.getElementById('display')

let tbody=document.querySelector('tbody')

let arr=[]

btn.addEventListener("click",function(e){ // put data inside the local storage
   
    let data={}

    data.Name=input1.value
    data.Age=input2.value
    
    localStorage.setItem("user",JSON.stringify(data));

    //

})

show.addEventListener("click", (e) => {
    e.preventDefault() // retrive data from local storage and print it.
    let display= localStorage.getItem("user")
    if(display){
        let parseData=JSON.parse(display)
        // tbody.innerHTML=null
        // let  tbody=document.createElement('tbody')
        let tr=document.createElement("tr")


        let td=document.createElement("td")
        td.innerText=parseData.Name

        let td2=document.createElement('td')
        td2.innerText=parseData.Age

        tr.append(td,td2)
        tbody.append(tr)
       

    }
    else{
        alert("usere not found")
    }
})



        