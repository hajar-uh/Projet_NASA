// RECHERCHES LIES A UN ASTEROIDES EN PARTICULIER

var asteroid_id 
// asteroid_id of the one we clicked on previously on the flipon of the card 
var api_key = 'MR2lBGrANhJaGDVWpGqdIW2rQzlZcZX95g8nf7LG';

const api_url =
    "https://api.nasa.gov/neo/rest/v1/neo/browse";

async function getapi(url) {
    var url = api_url + '?asteroid_id=' + asteroid_id + '&api_key' + api_key ;
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
getapi(api_url);

function show(data) {
    let tab =
        `<tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
         </tr>`;
  //-1 , -2 , - 3 , -4 et - 5
    for (let r of data) {
        tab += `<tr> 
    <td>${data.date} </td>
    <td>${r.date}</td>
    <td>${r.date}</td>
    <td>${r.date}</td> 
    <td>${r.date}</td>          
  </tr>`;
    }
    document.getElementById("asteroid_next").innerHTML += tab;
    //"close_approach_date" how to choose the +1 
  }
