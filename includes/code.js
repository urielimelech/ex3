var frame = document.getElementById("wrapper");
var plus = document.getElementById("addCubes");
window.onload=function(){
    for(i=0;i<4;i++){createCubes()}
}
plus.onclick=function(){createCubes()}

function createCubes(){
    var cube = document.createElement("article");
    cube.style.opacity=Math.random();
    frame.appendChild(cube);
}