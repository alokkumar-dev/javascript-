// var element;



document.getElementById("header").addEventListener("mouseleave" , abc);

document.getElementById("header").addEventListener("click" , xyz);

function abc(){
    document.getElementById("header").style.backgroundColor ="pink";
}


function xyz(){
    document.getElementById("header").removeEventListener('mouseleave' , abc);
}





// document.getElementById("header").onmouseenter =abc;
// function abc(){
//     document.getElementById("header").style.backgroundColor ="green";
// }

// console.log(element);

