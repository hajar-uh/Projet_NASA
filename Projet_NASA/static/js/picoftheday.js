let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//ENVOYER LA REQUETE 
async function sendApiRequest(){
  let API_KEY = "MR2lBGrANhJaGDVWpGqdIW2rQzlZcZX95g8nf7LG"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?date=2022-09-26&api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}



//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
document.querySelector("#title").innerHTML += data.title;
document.querySelector("#content").innerHTML += data.explanation;
document.querySelector("#img").innerHTML += `<img src="${data.url}">` 
}

