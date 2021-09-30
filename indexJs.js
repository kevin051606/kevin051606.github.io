function unhide(){
  let normalDiv = document.getElementById("normal");
  let fakeDiv = document.getElementById("haha");
  fakeDiv.visibility = "hidden";
  normalDiv.visibility = "visible";
}
