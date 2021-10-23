function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  async function getFile() {
    try {
        let myFile = await fetch("data.json");
        // console.log(myFile);
        myObj = await myFile.json();
        movies = myObj.movies;
        series= myObj.series;
        suggested=myObj.suggested
        comingsoon=myObj.comingsoon
        // console.log(myObj.length);
     } catch (err) {
        console.log(err);
     }
     console.log(movies);
     console.log(series);
     console.log(suggested)
     let moviesList = document.querySelector("#movies");
     let seriesList = document.querySelector("#seriesList");
     let suggetedList= document.querySelector("#suggetedList");
     let comingsoonList=document.querySelector(".comingSoonDiv");

     let createTile = (i,list) => {

        let slide = document.createElement('div');
        slide.className="movieItem";
        let link = document.createElement('a');
        link.href="javascript:void(0);";
        link.addEventListener("click",videoToggle,false);
        let image = document.createElement('img');
        image.src=list[i].image;
        link.appendChild(image);
        let h4 = document.createElement('h4');
        h4.appendChild(document.createTextNode(list[i].name));
        slide.appendChild(link);
        slide.appendChild(h4);
        if(list===movies){
        moviesList.appendChild(slide);
        }
        else if(list===series){
            seriesList.appendChild(slide);
        }
        else{
            suggetedList.appendChild(slide);
        }

     }
     let comingSoonDiv = (i,list) => {

         let comingSoonTile = document.createElement('div');
         comingSoonTile.className="scrollItem";
         let thumbItem = document.createElement('div');
         thumbItem.className="thumbItem";
        let image = document.createElement('img');
        image.src=list[i].image;
        thumbItem.appendChild(image);
        let thumbTitle = document.createElement('div');
        thumbTitle.className="thumbTitle";
        let p = document.createElement('p');
         let link = document.createElement('a');
         link.appendChild(document.createTextNode(list[i].name));
         link.href="javascript:void(0);";
         link.addEventListener("click",videoToggle,false);
         p.appendChild(link);
         p.className="MovieNameThumb";
         let thumbMovieDetails = document.createElement('div');
         thumbMovieDetails.className="thumbMovieDetails";
         let p1 = document.createElement('p');
         p1.innerHTML=("generes: <a href=\"action.html\">action</a>,<a href=\"action\">adventure</a>")
         thumbMovieDetails.appendChild(p1);
         thumbTitle.appendChild(p);
         thumbTitle.appendChild(thumbMovieDetails);
         thumbItem.appendChild(thumbTitle);

         comingSoonTile.appendChild(thumbItem);
         comingsoonList.appendChild(comingSoonTile);
     }
     for (let i = 0; i < comingsoon.length; i++) {
        comingSoonDiv(i,comingsoon);
 }
     for (let i = 0; i < suggested.length; i++) {
        createTile(i,suggested);
 }
     for (let i = 0; i < movies.length; i++) {
            createTile(i,movies);
     }
     for (let i = 0; i < series.length; i++) {
        createTile(i,series);
 }

  }

  function videoToggle(){
      var trailer=document.querySelector(".trailer");
      trailer.classList.toggle("active");
      var video=document.querySelector("video");
      video.pause();
      video.currentTime=0;
  }