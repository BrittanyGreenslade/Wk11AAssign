//declared function that changes the 'titleTag' font size and font color when hovered over
function titleHovered(e) {
  console.log(e);
  titleTag.style.fontSize = `50px`;
  titleTag.style.color = `blue`;
}
//declared function that changes the 'titleTag' background when clicked
function beenClikd(e) {
  console.log(e);
  titleTag.style.background = `chartreuse`;
}
//declared function that changes the 'titleTag' background ONLY when the SPACE bar key
//is pressed. 
//found the code of the space key first by console logging the outcome of the function 
//being called on "keydown" when the space key is pressed 
//once the function ran, the background of the body turns hot pink
function spcKey(e) {
  console.log(e);
  if (e.code === `Space`) {
    document.body.style.background = `hotpink`;
  }
}
//set a global variable titleTag that grabs the element with the ID 'titleTag' from HTML
//that will be accessible to the entire JS page 
let titleTag = document.getElementById("titleTag");
//called the function 'titleHovered' on 'mouseover' (hover) and changed 'titleTag' when called
titleTag.addEventListener("mouseover", titleHovered);
//called the function 'beenClikd' on 'click' and changed 'titleTag' when called
titleTag.addEventListener("click", beenClikd);
//called the function 'spcKey' on 'keydown' and changed the body when called
document.body.addEventListener("keydown", spcKey);
