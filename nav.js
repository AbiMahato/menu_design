function myfunction(){
    var x=document.getElementById("navlists");
    var y=document.getElementById("navlistwrap");
    var z=document.getElementById("body");
    if(x.style.width=="0px"){
        x.style.width="250px";
        y.style.left="0px";
        z.style.backgroundColor=" #0C0C0C";
        z.style.opacity="0.6";
    }
    else{
        x.style.width="0px";
        y.style.left="-200px";
        z.style.opacity="1";
        z.style.backgroundColor="transparent";
    }

}
function myfunction1(){
    var x=document.getElementById("navlists");
    var y=document.getElementById("navlistwrap");
    var z=document.getElementById("body");
    x.style.width="0px";
    y.style.left="-200px";
    z.style.opacity="1";
    z.style.backgroundColor="transparent";
}