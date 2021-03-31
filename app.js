function titleHovered(e) {
  console.log(e);
  titleTag.style.fontSize = `50px`;
}
function beenClikd(e) {
  console.log(e);
  titleTag.style.background = `chartreuse`;
}
function spcKey(eventDetails) {
  console.log(eventDetails);
  if (eventDetails.code === `Space`) {
    document.body.style.background = `hotpink`;
  }
}
let titleTag = document.getElementById("titleTag");
titleTag.addEventListener("mouseover", titleHovered);
titleTag.addEventListener("click", beenClikd);
document.body.addEventListener("keydown", spcKey);
