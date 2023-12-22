let container=document.getElementById("container")

let Moviedata=[]
let btn=document.getElementById("button")

async function checkMovie() {
    try {
        let res = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=830c3d9d");
        let data = await res.json();
        Moviedata.push(data);
        displayData(Moviedata);
    } catch (error) {
        console.log(error);
        console.log("something went wrong");
    }
}
// function checkMovie(){


//     fetch("https://www.omdbapi.com/?i=tt3896198&apikey=7910f82c"){
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(finalresponse) {
//         let data=finalresponse.responce
//         if (data === "True") {
//             displayData(finalresponse);
//         } else {
//             document.getElementById("display").innerHTML = "Movie Not Found";
//         }
//     })
//     .catch(function(error) {
//         console.log(error)
//         console.log("Error");
//     });

// }


function displayData(data){
    data.forEach((user)=>{
        
        
        
        let div=document.createElement("div")
        div.className="card"

        let actor=document.createElement('p')
        actor.textContent=`Acotor name :   ${user.Actors}`

        let award=document.createElement('p')
        award.textContent=`Awards :   ${user.Awards}`
        
        let boxoffice = document.createElement('p')
        boxoffice.textContent=`Boxoffice Collection :  ${user.BoxOffice}`

        let country=document.createElement('p')
        country.textContent=user.country

        let dvd=document.createElement('p')
        dvd.textContent=user.DVD

        let director=document.createElement('p')
        director.textContent=user.Director
        
        let gerne=document.createElement('p')
        gerne.textContent=user.Genre
        
        let language=document.createElement('p')
        language.textContent=user.Language

        let metascore=document.createElement('p')
        metascore.textContent=user.Metascore

        let plot=document.createElement('p')
        plot.textContent=user.Plot

        let poster=document.createElement('p')
        poster.textContent=user.Poster

        let production=document.createElement('p')
        production.textContent=user.Production

        let rated=document.createElement('p')
        rated.textContent=user.Rated

        let rating=document.createElement('p')
        rating.textContent=user.Rating

        let realised=document.createElement('p')
        realised.textContent=user.Realised

        let responce=document.createElement('p')
        responce.textContent=user.Responce

        let runtime=document.createElement('p')
        runtime.textContent=user.Runtime

        let tittle=document.createElement('p')
        tittle.textContent=user.Tittle

        let type=document.createElement('p')
        type.textContent=user.Type

        let website=document.createElement('p')
        website.textContent=user.Website

        let writter=document.createElement('p')
        writter.textContent=user.Writer

        let year=document.createElement('p')
        year.textContent=user.Year


        let imdbid=document.createElement('p')
        imdbid.textContent=user.imdbId

        let imdbrating=document.createElement('p')
        imdbrating.textContent=user.imdbRating

        let imdbvotes=document.createElement('p')
        imdbvotes.textContent=user.imdbVotes

        div.append(actor,award,boxoffice,country,dvd,director,gerne,language,metascore,plot,poster,production,rated,rating,realised,responce,runtime,tittle,type,website,writter,year,imdbid,imdbrating,imdbvotes
        )
    container.textContent=""
        container.append(div)

    })

    
}
btn.addEventListener("click",function(){
    checkMovie()
})

// function ShowData()


