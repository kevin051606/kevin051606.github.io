function unhide(){
  let normalDiv = document.getElementById("normal");
  let fakeDiv = document.getElementById("haha");
  fakeDiv.style.visibility = "hidden";
  normalDiv.style.visibility = "visible";
}
