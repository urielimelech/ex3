var frame = document.getElementById("wrapper");
var plus = document.getElementById("addCubes");
window.onload=function(){
    for(i=0;i<4;i++){
        var cube = document.createElement("article");
        cube.style.opacity=Math.random();
        frame.appendChild(cube);
    }
}
plus.onclick=function(){
        var cube = document.createElement("article");
        cube.style.opacity=Math.random();
        frame.appendChild(cube);
}