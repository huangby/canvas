/**
 * Created by windows7 on 2015/7/30.
 */
function p(d,n,p,e){
    if(n<0)
       return;
    d.innerHTML+= e.clientX+","+e.clientY+"  ";
    setTimeout(p(d,n-1,p,e),1000);
}
function pageLoad(){
    var can = document.getElementById('can');
    var cans = can.getContext('2d');
    var d = document.getElementById("p");
    var poin=[]
    cans.moveTo(20,30);//第一个起点
    //cans.lineTo(120,90);//第二个点
    ////cans.lineTo(220,60);//第三个点（以第二个点为起点）
    //cans.lineWidth=3;
    //cans.strokeStyle = 'red';
    //cans.stroke();
    var flag = 0;
    can.onmousedown = function(e){
        var event = window.event || e;
        var x=event.clientX;
        var y=event.clientY;
        cans.lineWidth=3;
        cans.strokeStyle = 'red';
        flag = 1;
        //if(flag == 1){
        //    //cans.lineTo(x,y);
        //    //cans.stroke();
        //
        //    d.innerHTML+= e.clientX+","+e.clientY+"  ";
        //}
        setTimeout(p(d,10,poin,e),2000);
    };
    can.onmouseup=function(e){
        for(var i=0;i<poin.length;i++)
            d.innerHTML +=poin[i];
    };
    can.onmouseover = function (e) {
        //var dd = document.getElementById("p");
        //dd.innerHTML+= e.clientX+","+e.clientY+"  ";
    }
}
