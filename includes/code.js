var frame = document.getElementById("wrapper");
var plus = document.getElementById("addCubes");
j=0;
window.onload=function(){
    for(i=0;i<4;i++){
        var cube = document.createElement("article");
        cube.style.opacity=Math.random();
        frame.appendChild(cube);
        console.log('test');
    }
}
plus.onclick=function(){
    if(j<8){
        var cube = document.createElement("article");
        cube.style.opacity=Math.random();
        frame.appendChild(cube);
        j++;
    }
}