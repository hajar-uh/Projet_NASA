// RECHERCHE + RECTO CARD ASTEROIDES 

var from = document.getElementById("from").value;
var start_date = from.replace(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/, "$3-$2-$1");

var to = document.getElementById("to").value;
var end_date = to.replace(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/, "$3-$2-$1");

var exampleURL = 'https://api.nasa.gov/neo/rest/v1/feed';

var apiKey = 'MR2lBGrANhJaGDVWpGqdIW2rQzlZcZX95g8nf7LG';
var request = new XMLHttpRequest();
request.open('GET', exampleURL + '?start_date=' + start_date + '&end_date=' + end_date + '&api_key' + apiKey, true);

request.addEventListener('load', function () {

  if (request.status >= 200 && request.status < 400) {
    var response = JSON.parse(request.responseText);
    console.log(response);
  } else {
    console.log("Y'a peut-être une erreur" + request.statusText);
  }
});

function show(data) {
  document.getElementById("asteroid_name").innerHTML += data.name;
  document.getElementById("asteroid_size_min").innerHTML += data.estimated_diameter.meters.estimated_diameter_min;
  document.getElementById("asteroid_size_max").innerHTML += data.estimated_diameter.meters.estimated_diameter_max;
  document.getElementById("asteroid_distance").innerHTML += data.miss_distance.kilometers;
}
// request.send(null);