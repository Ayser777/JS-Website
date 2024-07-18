"use strict"

    // var x = prompt("Mutqagreq dzer anuny")
    // var y = prompt("Mutqagreq dzer azganuny")
    // alert(x + " " + y)

// ---------------------------


function myFunction(){
    var progres = document.querySelectorAll(".bar")
    progres[0].style.width = "75%"
    progres[0].style.background = "#04d004"
    progres[0].style.textAlign = "right"
    progres[0].innerHTML = "75%"
    progres[0].style.transition = "1s"
    progres[1].style.width = "70%"
    progres[1].style.transition = "2s"
    progres[1].style.background = "#04d004"
    progres[1].style.textAlign = "right"
    progres[1].innerHTML = "70%"
    progres[2].style.width = "95%"
    progres[2].style.transition = "3s"
    progres[2].style.background = "#04d004"
    progres[2].style.textAlign = "right"
    progres[2].innerHTML = "95%"
    progres[3].style.width = "85%"
    progres[3].style.transition = "4s"
    progres[3].style.background = "#04d004"
    progres[3].style.textAlign = "right"
    progres[3].innerHTML = "85%"
    progres[4].style.width = "80%"
    progres[4].style.transition = "5s"
    progres[4].style.background = "#04d004"
    progres[4].style.textAlign = "right"
    progres[4].innerHTML = "80%"
    progres[5].style.width = "85%"
    progres[5].style.transition = "6s"
    progres[5].style.background = "#04d004"
    progres[5].style.textAlign = "right"
    progres[5].innerHTML = "85%"
    progres[6].style.width = "80%"
    progres[6].style.transition = "7s"
    progres[6].style.background = "#04d004"
    progres[6].style.textAlign = "right"
    progres[6].innerHTML = "80%"

    var border = document.getElementById('active');
    border.style.height = '100%';
    border.style.transition = '3s';
}

// --------------------------------------

var btn = document.getElementById("btn")

function myFunction1(){
    if(
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ){
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    }
}

function topFunction(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
 }


 window.onscroll = function(){
    myFunction1()
 }


//  -----------------------------------

var main1 = document.getElementById("main1")

function imgFunction(){
    main1.style.display = "block"
}

var clos1 = document.getElementById("clos1")

function closfunction(){
    main1.style.display = "none"
}

var main2 = document.getElementById("main2")

function imgFunction1(){
    main2.style.display = "block"
}

var clos2 = document.getElementById("clos2")

function closfunction1(){
    main2.style.display = "none"
}


var main3 = document.getElementById("main3")

function imgFunction2(){
    main3.style.display = "block"
}

var clos3 = document.getElementById("clos3")

function closfunction2(){
    main3.style.display = "none"
}


var main4 = document.getElementById("main4")

function imgFunction3(){
    main4.style.display = "block"
}

var clos4 = document.getElementById("clos4")

function closfunction3(){
    main4.style.display = "none"
}


var main5 = document.getElementById("main5")

function imgFunction4(){
    main5.style.display = "block"
}

var clos5 = document.getElementById("clos5")

function closfunction4(){
    main5.style.display = "none"
}


var main6 = document.getElementById("main6")

function imgFunction5(){
    main6.style.display = "block"
}

var clos6 = document.getElementById("clos6")

function closfunction5(){
    main6.style.display = "none"
}


var main7 = document.getElementById("main7")

function imgFunction6(){
    main7.style.display = "block"
}

var clos7 = document.getElementById("clos7")

function closfunction6(){
    main7.style.display = "none"
}


var main8 = document.getElementById("main8")

function imgFunction7(){
    main8.style.display = "block"
}

var clos8 = document.getElementById("clos8")

function closfunction7(){
    main8.style.display = "none"
}


var main9 = document.getElementById("main9")

function imgFunction8(){
    main9.style.display = "block"
}

var clos9 = document.getElementById("clos9")

function closfunction8(){
    main9.style.display = "none"
}


var main10 = document.getElementById("main10")

function imgFunction9(){
    main10.style.display = "block"
}

var clos10 = document.getElementById("clos10")

function closfunction9(){
    main10.style.display = "none"
}


var main11 = document.getElementById("main11")

function imgFunction10(){
    main11.style.display = "block"
}

var clos11 = document.getElementById("clos11")

function closfunction10(){
    main11.style.display = "none"
}

var main12 = document.getElementById("main12")

function imgFunction11(){
    main12.style.display = "block"
}

var clos12 = document.getElementById("clos12")

function closfunction11(){
    main12.style.display = "none"
}

function mouseDown(){
    document.getElementById("text").style.color = "#04d004";
  }

function keydownFunction(){
    alert("Duq sexmel stexny mutqagrman dashtum ");
  }


function copyFunction(){
    alert("Duq patchenel eq teqsty");
  }

