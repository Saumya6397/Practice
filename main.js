
var minute1=0,second1=0,millisecond1 =0;
console.log("hy");
$(document).on("click","#start",function(){

    console.log("start");
interval=setInterval(update,10);



});

$(document).on("click","#stop",function(){

    console.log("stop");
clearInterval(interval);



});

$(document).on("click","#reset",function(){
    millisecond1=0;
    second1=0;
    minute1=0;

    $("#milliseconds").text("00");
    $("#seconds").text("00");
    $("#minute").text("00");

});

function update(){

    millisecond1++;
    $("#milliseconds").text(millisecond1);
   // document.getElementById("milliseconds").innerHTML=millisecond1;

    if(millisecond1>=100){
      second1++;
      $("#seconds").text(second1);
      millisecond1=0;

    }

    else if(second1>=60){
     
        minute1++;
        $("#minute").text(minute1);
        second1=0;

    }

}