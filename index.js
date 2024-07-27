
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#restart");
let title =document.querySelector(".heading");
let originalText ="Tik-Tak-Toe";

let turnO = true;

let winningPatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

for(let box of boxes){
    box.addEventListener("click", handleCLickEvent);
}

function handleCLickEvent(event){
    if(event.target.innerText ==""){
        if(turnO){
            event.target.innerText ="O";
            turnO = !turnO;
        }
        else{
            event.target.innerText ="X";
            turnO = !turnO;
        }

        checkwinner();

    }
}

function checkwinner(){
    for(let pattern of winningPatterns ){

       let pos1= boxes[pattern[0]].innerText ;
       let pos2= boxes[pattern[1]].innerText;
       let pos3= boxes[pattern[2]].innerText ;
    
    if(pos1!="" && pos2!= "" && pos3!=""){
        if(pos1 === pos2 && pos2=== pos3)
        {
            if(pos1 =="O"){
                title.innerText = "Winner is O ";

            }
            else{
                title.innerText = "Winner is X"
            }
            
        }
    }
    }
}


resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML ="";
    })
    turnO =true;
    title.innerText = originalText;
})

