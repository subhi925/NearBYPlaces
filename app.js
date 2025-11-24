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
  "/find": `<div><h2>Find Activity Near Me</h2><p>Here you can search for activities nearby.</p></div>`,
  "/surprise": `<div><h2>Surprise!</h2><p>We recommend a random activity for you 😎</p></div>`,
};

//---------- Main container ----------
const mainDiv = document.getElementById("maincontant");

//---------- Components ----------
function renderRoute(path) {
  mainDiv.innerHTML = routes[path] || "<h2>404 - Page not found</h2>";
}

//---------- Navigation listeners ----------
document
  .getElementById("home")
  .addEventListener("click", () => renderRoute("/"));
document
  .getElementById("findactivity")
  .addEventListener("click", () => renderRoute("/find"));
document
  .getElementById("surprise")
  .addEventListener("click", () => renderRoute("/surprise"));
document
  .getElementById("hospital")
  .addEventListener("click", () => renderRoute("/hospital"));
document
  .getElementById("atm")
  .addEventListener("click", () => renderRoute("/atm"));

//---------- Initial render ----------
renderRoute("/");
