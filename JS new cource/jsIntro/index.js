// var element;



document.getElementById("header").addEventListener("dblclick" , abc);

document.getElementById("header").addEventListener("dblclick" , function (){
    this.style.border = "10px dotted red";
});

function abc(){
    document.getElementById("header").style.backgroundColor ="pink";
}




// document.getElementById("header").onmouseenter =abc;
// function abc(){
//     document.getElementById("header").style.backgroundColor ="green";
// }

// console.log(element);

