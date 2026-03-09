const dropboxLink = "https://www.dropbox.com/scl/fo/ez3bxn9473shpnns7gdkr/AI2G6DvaOlrRRIvV5Jsc6tY?rlkey=veks6ppmxs6q8bldlr7briymv&st=77khnvko&dl=0";

const container = document.getElementById("link-container");
const a = document.createElement("a");
a.href = dropboxLink;
a.target = "_blank";
a.textContent = "qui";
container.appendChild(a);
