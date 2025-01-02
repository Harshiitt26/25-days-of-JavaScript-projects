let index = 0;
let colors = ["yellow","brown","red","blue","green","pink","orange"];

let body = document.querySelector("body");
let btn = document.querySelector(".btn");

function changeBackColor(){
    index++;
    if(index > colors.length -1){
        index = 0;
    }
}
btn.addEventListener("click",()=>{
    body.style.backgroundColor = colors[index];
    changeBackColor();
})