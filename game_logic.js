// This is assignment of Coursera JS lecture.

var numFaces = 2;
  leftSide = document.getElementById("leftSide");
  rightSide = document.getElementById("rightSide");
  theBody = document.getElementsByTagName("body")[0];

function generateFaces() {
  var i, top, left, imgNode, leftImg;

  for (i = 0; i < numFaces; i++) {
    top = Math.floor(Math.random() * 400);
    left = Math.floor(Math.random() * 400);
    imgNode = document.createElement("img");
    imgNode.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
    imgNode.style.top = top + "px";
    imgNode.style.left = left + "px";
    leftSide.appendChild(imgNode);
  }

  leftImg = leftSide.cloneNode(true);
  leftImg.removeChild(leftImg.lastChild);
  rightSide.appendChild(leftImg);

  leftSide.lastChild.onclick = function nextLevel(e) {
    e.stopPropagation();
    while (leftSide.firstChild) {
      leftSide.removeChild(leftSide.firstChild);
    }
    while (rightSide.firstChild) {
      rightSide.removeChild(rightSide.firstChild);
    }
    numFaces += 3;
    generateFaces();
  };

  theBody.onclick = function gameover() {
      alert("Game Over!!");
      theBody.onclick = null;
      leftSide.lastChild.onclick = null;
    }
}
