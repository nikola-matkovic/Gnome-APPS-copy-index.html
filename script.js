function podesivreme(){
centar=document.getElementById("centar");
var d=new Date();
var dan=d.getDay();
var danUNedelji, mesec;
var m=d.getMonth();
var datum=d.getDate();
var sat=d.getHours();
var minut=d.getMinutes();
var sekunda=d.getSeconds();
switch (dan){
    case 1:
        danUNedelji="понедељак";
        break;
    case 2:
        danUNedelji="уторак";
        break;
    case 3:
        danUNedelji="среда";
        break;
    case 4:
        danUNedelji="четвртак"
        break
    case 5:
        danUNedelji="петак";
        break;
    case 6:
        danUNedelji="субота";
        break;
    case 0:
        danUNedelji="недеља"
        break;
}
switch (m){
    case 0:
        mesec="јануар";
        break;
    case 1:
        mesec="фебруар";
        break;
    case 2:
        mesec="март";
        break;
    case 3:
        mesec="април"
        break
    case 4:
        mesec="мај";
        break;
    case 5:
        mesec="јун";
        break;
    case 6:
        mesec="јул";
        break;
    case 7:
        mesec="август";
        break;
    case 8:
        mesec="септембар";
        break;
    case 9:
        mesec="октобар";
        break;
    case 10:
        mesec="новембар";
        break
    case 11:
        mesec="децембар";
        break;
}
if (sat<10){
    sat="0"+sat;
}
if (minut<10){
    minut="0"+minut;
}
if (sekunda<10){
    sekunda="0"+sekunda;
}
vreme=danUNedelji+", "+datum+"."+mesec+", "+sat+ ":"+minut+":"+sekunda;
document.getElementById("centar").innerHTML=vreme;
}
setInterval(podesivreme, 100);
    trenutna=1;
function promeni() {
    if (trenutna==1){
        document.getElementsByTagName("html")[0].style.backgroundImage="url('pozadina2.jpg')";
        document.getElementById("js").src="pozadina2.jpg"
        trenutna=2;
    }
    else{
        document.getElementsByTagName("html")[0].style.backgroundImage="url('pozadina.png')";
          document.getElementById("js").src= 'pozadina.png'; 
        trenutna=1;
    }
}
setInterval(promeni, 10000);