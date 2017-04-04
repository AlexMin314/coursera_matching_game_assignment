var numberOfFaces = 2;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces() {
    for (var i = 0; i < numberOfFaces; i++) {
        var random_top = Math.random() * 400;
        random_top = Math.floor(random_top);
        var random_left = Math.random() * 400;
        random_left = Math.floor(random_left);
        var img_node = document.createElement("img");
        img_node.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        img_node.style.top = random_top + "px";
        img_node.style.left = random_left + "px";
        theLeftSide.appendChild(img_node);
    }
    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.onclick =
        function nextLevel(event) {
            event.stopPropagation();
            while (theLeftSide.firstChild)
                theLeftSide.removeChild(theLeftSide.firstChild);
            while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild);
            }
            numberOfFaces += 3;
            generateFaces();
        };
    theBody.onclick =
        function gameover() {
            alert("Game Over!!");
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
        }
}
