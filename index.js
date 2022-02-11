const body = document.getElementById("body");
const archivo = document.getElementById("archivo");


// background changer:
const textura1 = document.querySelector(".textura1");
const textura2 = document.querySelector(".textura2");
const textura3 = document.querySelector(".textura3");
const textura4 = document.querySelector(".textura4");
textura1.addEventListener("click",(e)=>{
    body.classList="back1";
})
textura2.addEventListener("click",(e) =>{
    body.classList="back2";
})
textura3.addEventListener("click",(e) =>{
    body.classList="back3";
})
textura4.addEventListener("click",(e) =>{
    body.classList="back4";
})


// font color:
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
var colorDeTurno = "";
color1.addEventListener("click",(e)=>{
    colorDeTurno = "#fff";
    body.style.color=colorDeTurno;
    archivo.style.color = colorDeTurno;
})
color2.addEventListener("click",(e) =>{
    colorDeTurno = "#000";
    body.style.color=colorDeTurno;
    archivo.style.color = colorDeTurno;
})
color3.addEventListener("click",(e) =>{
    colorDeTurno = "#313131";
    body.style.color=colorDeTurno;
    archivo.style.color = colorDeTurno;
})



//drag & drop:

archivo.addEventListener("dragover",e=>{
    e.preventDefault();
    archivo.style.color = "#F6F887";
})
archivo.addEventListener("dragleave",e=>{
    e.preventDefault();
    archivo.style.color = colorDeTurno;
})
archivo.addEventListener("drop",e=>{
    e.preventDefault();
    archivo.style.color = colorDeTurno;
    cargarArchivo(e.dataTransfer.files)
})


const cargarArchivo = ar =>{
    for( var i = 0 ; i < ar.length ; i++){
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load",(e)=>{
            let newImg = `<img src='${e.currentTarget.result}'>`;
            document.querySelector(".resultado").innerHTML += newImg;
        })
    }
} 