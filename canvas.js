function loadPage(){
    var can=document.getElementById("can");
    var cans=can.getContext("2d");
    var flag = false;
    cans.lineWidth=2;
    cans.strokeStyle='red';
    //cans.globalAlpha = 0.5;
    can.setAttribute("width",window.screen.width);
    can.setAttribute("height",window.screen.height*3);
    can.onmousedown = function (event) {
        flag=true;
        x=event.offsetX;
        y=event.offsetY;
        cans.beginPath();
        cans.moveTo(x,y)
    };
    can.onmouseup = function () {
        flag = false;
        cans.closePath();
    };
    can.onmousemove = function (event) {
        if(flag){
            x= event.offsetX;
            y= event.offsetY;
            paint([x,y],cans);
        }
    };
}
function paint(point,can){
    can.lineTo(point[0],point[1]);
    can.moveTo(point[0],point[1]);
    can.closePath();
    can.stroke();
}