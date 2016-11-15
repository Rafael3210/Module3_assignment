function upDate(previewPic){
  x = document.getElementsByClassName("preview");
  y = document.getElementById("image");
  
  y.style.backgroundImage = "url('" + previewPic.src + "')";
  y.innerHTML = previewPic.alt;
}

function unDo(){
  x = document.getElementById("image");
  x.style.backgroundColor = "#8e68ff";
  x.style.backgroundImage = "none";
  x.innerHTML = "Hover over an image below to display here.";
}