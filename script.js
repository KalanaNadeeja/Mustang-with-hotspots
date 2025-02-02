document.addEventListener("DOMContentLoaded", function () {
    const hotspots = document.querySelectorAll(".hotspot");

    hotspots.forEach(hotspot => {
        hotspot.addEventListener("click", function () {
            alert(this.getAttribute("data-text"));
        });
    });
});
// This script will add a click event listener to each hotspot element. When a hotspot is clicked, it will display an alert with the value of the "data-text" attribute of that hotspot.
