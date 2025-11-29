//---------- Routes ----------
const routes = {
  "/": `
              
                  <h2>Welcome to Places Near Me 🌍</h2>
          <p>
            Discover attractions, activities, and extreme adventures around you.
          </p>

          <div class="home-cards">
            <div class="home-card">
              <img
                src="https://img.icons8.com/3d-fluency/94/place-marker.png"
                width="60"
              />
              <h3>Find Near Me</h3>
              <p>See activities close to your current location.</p>
            </div>

            <div class="home-card">
              <img
                src="https://img.icons8.com/3d-fluency/94/compass.png"
                width="60"
              />
              <h3>Explore Map</h3>
              <p>Browse the map and discover new places.</p>
            </div>

            <div class="home-card">
              <img
                width="94"
                height="94"
                src="https://img.icons8.com/3d-fluency/94/gift.png"
                alt="gift"
              />
              <h3>Surprise Me</h3>
              <p>Get a random recommended activity.</p>
            </div>
            <div class="home-card">
              <img
                width="94"
                height="94"
                src="https://img.icons8.com/3d-fluency/94/atm.png"
                alt="atm"
              />
              <h3>ATM</h3>
              <p>Check ATM Near By</p>
            </div>
              <div class="home-card">
               <img width="94"
                height="94"
                src="https://img.icons8.com/3d-fluency/94/hospital-2.png"
                alt="hospital-2"/>
               <h3>Hospital</h3>
               <p>Near Hospital</p>
            </div>
            <div class="home-card">
               <img width="94"
                height="94"
                src="https://img.icons8.com/3d-fluency/94/partly-cloudy-day.png"
                alt="partly-cloudy-day"/>
               <h3>Weather</h3>
               <p>check the weather</p>
            </div>
            
          </div>
      `,
  "/find": ` <div id="findplaces">  
  <div id="infoplace">
              <span>location : name</span>
              <span>region: region </span><span>country:country</span>
            </div>
          </div>
              <h1>Welcome</h1>
              <dotlottie-wc src="https://lottie.host/72e12575-639c-4535-8328-bd215fa26ea7/bjPEpm921q.lottie" speed="1" style="width: 300px; height: 300px" mode="forward" autoplay></dotlottie-wc>
            </div>
                      <!---Find Activity-->
          <div id="findplaces">
          

          <!----------------->
            
            
            
            `,
  "/surprise": `<div><h2>Surprise!</h2><p>We recommend a random activity for you 😎</p></div>`,
};

//------------------------varbels------
let currLoc = { lon: 0, lat: 0 };
//---------- Main container ----------
const mainDiv = document.getElementById("maincontant");

//---------- Components ----------
function renderRoute(path) {
  mainDiv.innerHTML = routes[path] || "<h2>404 - Page not found</h2>";
}
//-----------------------Geolocation----------
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else alert("the Browser Not Support Location Detcted");
}

async function success(pos) {
  //console.log(pos);
  currLoc.lon = pos?.coords?.longitude;
  currLoc.lat = pos?.coords?.latitude;

  const data = await loadfetch();
  console.log("data", data);

  window.weatherData = data;
}

function error(pos) {
  alert("No Positoin available");
}

getLocation();
//---------------Style media------------
let mobilestyle = document.getElementById("side");
let row = document.getElementById("row");
function detectMob() {
  return window.innerWidth <= 500;
}
if (detectMob()) {
  console.log(true);
}

//---------- Navigation listeners ----------

document
  .getElementById("home")
  .addEventListener("click", () => renderRoute("/"));
document.getElementById("findactivity").addEventListener("click", () => {
  renderRoute("/find");
  if (window.weatherData) {
    rendweather(window.weatherData);
  }
});
document
  .getElementById("surprise")
  .addEventListener("click", () => renderRoute("/surprise"));
document
  .getElementById("hospital")
  .addEventListener("click", () => renderRoute("/hospital"));
document
  .getElementById("atm")
  .addEventListener("click", () => renderRoute("/atm"));
//--------------------------------------
//------------fetch func to get Weather Info-----
let err = null;

let resualt = null;
async function loadfetch() {
  if (currLoc.lat != 0 && currLoc.lon != 0) {
    const data = new FormData();
    data.append("lat", currLoc.lat);
    data.append("lon", currLoc.lon);

    try {
      const url = "http://localhost:8080/Places/places.php";
      const option = {
        method: "POST",
        body: data,
      };
      const res = await fetch(url, option);
      resualt = await res.json();
      return resualt;
    } catch (errr) {
      err = errr;
      return null;
    }
  }
}
//---------------------render the wether on the page--
function rendweather(data) {
  if (!data) return;
  const content = document.getElementById("infoplace");
  content.innerHTML = `  <span>location : ${data?.location?.name}</span>
              <span>region: ${data?.location?.region} </span><span>country:${data?.location?.country}</span>`;
}

//---------- Initial render ----------
renderRoute("/");
