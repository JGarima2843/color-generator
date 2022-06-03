function getcolor(){
 const num= Math.floor (Math.random()*16777215);
 const hexcodes="#"+num.toString(16);
 document.body.style.backgroundColor=hexcodes;
 document.querySelector('.hexcode').innerText=hexcodes;
 navigator.clipboard.writeText(hexcodes);
 console.log(hexcodes);
 console.log(num)
}

document.getElementById("btn").addEventListener("click",getcolor);




getcolor();