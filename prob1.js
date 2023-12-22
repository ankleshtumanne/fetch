let contaner=document.getElementById('container')

let input1=document.getElementById('inp1')
let input2=document.getElementById('inp2')

let btn=document.getElementById('submit')

// let btn2=document.getElementById('display')

let tbody=document.querySelector('tbody')

let arr=[]

btn.addEventListener("click",function(e){
    e.preventDefault();
    let data={}

    data.Name=input1.value
    data.Age=input2.value
    
    arr.push(data)
    console.log(arr)
    tbody.innerHTML=null

    arr.map((e)=>{
        // let  tbody=document.createElement('tbody')
        let tr=document.createElement("tr")


        let td=document.createElement("td")
        td.innerText=e.Name

        let td2=document.createElement('td')
        td2.innerText=e.Age

        tr.append(td,td2)
        tbody.append(tr)
    })

})