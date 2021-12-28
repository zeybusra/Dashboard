const value = document.querySelector("#themeChanger");

value.addEventListener("click", function (e) {
    // const changer_button = document.querySelector("#themeChanger");
    if (document.body.classList.contains("dash-light-theme")) {
        // value.classList.remove("light-theme");
        // value.classList.add("dark-theme");
        value.classList.add("dark-a");
        document.body.classList.remove("dash-light-theme");
        value.innerHTML = "<i class=\"bi bi-brightness-high fs-5 mx-3 p-2 rounded-3 \"></i>";
    } else {
        // value.classList.remove("dark-theme");
        // value.classList.add("light-theme");
        // value.classList.add("light-a");
        document.body.classList.add("dash-light-theme");
        value.innerHTML = "<i class=\"bi bi-moon fs-5 mx-3 p-2 rounded-3 \"></i>";
    }

}, false);


const dashProfile = document.getElementById("profilePicture");

dashProfile.addEventListener("click", pickProfile);

function pickProfile() {

}


