let container=document.getElementById("container")

let Moviedata=[]
let btn=document.getElementById("button")



async function checkMovie() {
    try {
        let res = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=830c3d9d");
        // let res=await fetch("http://www.omdbapi.com/?t=inception")
        let data = await res.json();
        Moviedata.push(data);
        localStorage.setItem("user",JSON.stringify(Moviedata))
        displayData();
        // console.log(Moviedata)
    } catch (error) {
        console.log(error);
        console.log("something went wrong");
    }
}
// checkMovie()

function displayData(){
    let display=localStorage.getItem("user")
    if(display){
        let parse=JSON.parse(display)
       
        parse.forEach((user)=>{

            let div=document.createElement("div")
            div.className="card"

            let actor=document.createElement('p')
            actor.textContent=`Acotor name :   ${user.Actors}`

            let award=document.createElement('p')
            award.textContent=`Awards :   ${user.Awards}`
            
            let boxoffice = document.createElement('p')
            boxoffice.textContent=`Boxoffice Collection :  ${user.BoxOffice}`

           

            div.append(actor,award,boxoffice)
            
            container.textContent=""
            container.append(div)
        })
    }
    else{
        console.log("error")
    }
        
}



btn.addEventListener("click",function(){
    checkMovie()
})

// function ShowData()


